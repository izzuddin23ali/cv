import Card from "./Card"

const Education = ({ eduData }) => {

    return(
            
        <>

            {eduData.schools.map((school) => (

                <Card key = {school.id} data = {school} />

            ))}

        </>

    )
}

export default Education;