import Card from "./Card";

const Project = ({data, view}) => {
    return(
        <>

            {data.data.filter((data) => data.category === "projects").map((project) => (

                <Card key = {project.id} data = {project} view = {view}/>

            ))}

        </>
    )
}

export default Project;