import "./App.css";
import Personal from "./components/Personal";
import Main from "./components/Main";

function App() {
  return (
    <div className="container" id="container">
      <div className="row">
        <Personal />
        <Main />
      </div>
    </div>
  );
}

export default App;
