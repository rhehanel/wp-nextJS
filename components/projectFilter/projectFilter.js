import { useEffect, useState } from "react"
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters.js";
import { FlexLayout } from "components/FlexLayout";

export const ProjectFilter = () => {
    const [projects, setProjects] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 3;
    const router = useRouter();
    
    const filter = async () => {
        const { page, residential, nonResidential } = 
            queryString.parse(window.location.search);
        const filters = {};
        if (residential === "true") {
            filters.residential = true;
        }
        if (nonResidential === "true") {
            filters.nonResidential = true;
        }

        const response = await fetch(`/api/filter`, {
            method: "POST",
            body: JSON.stringify({
                page: parseInt(page || "1"),
                ...filters,
            }),
        });
        const data = await response.json();
        setProjects(data.projects);
        setTotalResults(data.total);
    };

    const handlePageClick = async (pageNumber) => {
        const {
            nonResidential,
            residential,
        } = queryString.parse(
            window.location.search
        );
        await router.push(
            `${router.query.slug.join("/")}?page=${pageNumber}&nonResidential=${!!nonResidential}&residential=${!!residential}`,
            null, {
                shallow: true,
            }
        );
        filter();
    }

    useEffect(() => {
        filter();
    }, []);

    const handleFilter = async ({
        nonResidential,
        residential,
    }) => {
        await router.push(
            `${router.query.slug.join(
                "/"
            )}?page=1&nonResidential=${!!nonResidential}&residential=${!!residential}`,
            null,
            {
                shallow: true,
            }
        );
        filter();
    }

    return (
        <FlexLayout>
            <Filters onFilter={handleFilter}/>
            <Results projects={projects}/>
            <Pagination
                totalPages={Math.ceil(totalResults / pageSize)}
                onPageClick={handlePageClick}
            />
        </FlexLayout>
    )
}