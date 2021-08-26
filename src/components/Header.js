import Hero from "./Hero";
import Nav from "./Nav";

const Header = (props) => {

    <div className = "row" id="header">

        <div className="col-12">

            <Hero bioToggle = {props.bioToggle}/>

            <Nav />

        </div>

    </div>

}

export default Header;