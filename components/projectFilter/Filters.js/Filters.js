import { useState, useEffect } from "react";
import queryString from 'query-string';

export const Filters = ({onFilter}) => {
    const [ nonResidential, setNonResidential ] = useState(false);
    const [ residential, setResidential ] = useState(false);

    const handleFilter = () => {
        onFilter({
            nonResidential,
            residential,
        });
    };

    useEffect(() => {
        const {
            nonResidential: nonResidentialInitial,
            residential: residentialInitial,
        } = queryString.parse(window.location.search);

        setNonResidential(nonResidentialInitial === "false");
        setResidential(residentialInitial === "false");
    }, []);

    useEffect(() => {
        function state() {
            if (document.getElementById('non').checked === true ) {
                setNonResidential(true)
                setResidential(false)
            } else if (document.getElementById('res').checked === true) {
                setNonResidential(false)
                setResidential(true)
            } else {
                setNonResidential(false)
                setResidential(false)
            }
        }
        document.querySelectorAll('input').forEach(function (input) {
            input.addEventListener("click", state);
        })
    }, [nonResidential, residential])

    return (
        <div className="filters fixed top-0 left-0 top-[133px] pl-[44px]">
            <h1>PROJECT</h1>
            <ul className="list">
            <li className="filter-item">
                    <label className="cursor-pointer">
                        <input type="radio"
                            name="filter"
                            defaultChecked
                            id="all"
                            onClick={handleFilter}
                        />
                        <span className="">all</span>
                    </label>
                </li>
                <li className="filter-item">
                    <label className="cursor-pointer">
                        <input type="radio"
                            name="filter"
                            id="non"
                            onClick={handleFilter}
                        />
                        <span className="">non-residential</span>
                    </label>
                </li>
                <li className="filter-item">
                    <label className="cursor-pointer">
                        <input type="radio"
                            name="filter"
                            id="res"
                            onClick={handleFilter}
                        />
                        <span className="">residential</span>
                    </label>
                </li>
            </ul>
        </div>
    )
}