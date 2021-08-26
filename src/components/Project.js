import Card from "./Card";

const Project = ({data}) => {
    return(
        <>

            {data.projects.map((project) => (

                <Card key = {project.id} data = {project} />

            ))}

        </>
    )
}

export default Project;