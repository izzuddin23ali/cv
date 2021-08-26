import Card from "./Card"

const Education = ({ data }) => {

    return(
            
        <>

            {data.schools.map((school) => (

                <Card key = {school.id} data = {school} />

            ))}

        </>

    )
}

export default Education;