import { ProjectCard } from "./ProjectCard"

export const Results = ({ projects }) => {
    return (
        <div className="grid grid-cols-3 gap-[20px] w-full pl-[168px]">
            {projects.map((project) => {
                return(
                    <ProjectCard
                        key={project.databaseId}
                        title={project.title}
                        destination={project.uri}
                        nonResidential={project.projectInfo.nonResidential}
                        residential={project.projectInfo.residential}
                        projectStartedYear={project.projectInfo.projectStartedYear}
                        image={project.featuredImage?.node?.sourceUrl}
                    />
                )
            })}
        </div>
    )
}