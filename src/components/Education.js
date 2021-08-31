import Card from "./Card"

const Education = ({ data, view }) => {

    return(
            
        <>

            {data.data.filter((data) => data.category === "education").map((school) => (

                <Card key = {school.id} data = {school} view = {view}/>

            ))}

        </>

    )
}

export default Education;