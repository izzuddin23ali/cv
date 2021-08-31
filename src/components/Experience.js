import Card from "./Card"

const Experience = ( {data, view}) => {
    return(
        <>

            {data.data.filter((data) => data.category === "experience").map((job) => (

                <Card key = {job.id} data = {job} view = {view}/>

            ))}
            
        </>
    )
}

export default Experience;