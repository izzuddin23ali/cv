import Chosen from "./Chosen";

const MoreInfo = ({data, shownCard, close}) => {
    return(
        <>

            {data.data.filter((data) => data.id === shownCard).map((clicked) => (
                
                <Chosen data = {clicked} close = {close}/>

            ))}

        </>
    )
}

export default MoreInfo;