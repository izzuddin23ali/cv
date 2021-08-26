import Card from "./Card"

const Experience = ( {data}) => {
    return(
        <>

            {data.jobs.map((job) => (

                <Card key = {job.id} data = {job} />

            ))}
            
        </>
    )
}

export default Experience;