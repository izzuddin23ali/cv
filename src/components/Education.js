import Card from "./Card"

const Education = ( eduData ) => {

    console.log(eduData.eduData.schools);

    return(
            
        <>

            {eduData.eduData.schools.map((school) => (

                <Card key = {school.id} data = {school} />

            ))}

        </>

    )
}

export default Education;