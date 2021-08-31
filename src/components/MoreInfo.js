import Chosen from "./Chosen";

const MoreInfo = ({data, shownCard}) => {
    return(
        <>
            <p>view more</p>

            {data.data.filter((data) => data.id === {shownCard}).map((clicked) => (
                
                <Chosen data = {clicked}/>

            ))}

        </>
    )
}

export default MoreInfo;