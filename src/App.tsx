import "./styles/App.scss";
import LeftComponent from "./components/Left";
import InfoComponent from "./components/Info";

function App() {
  return (
    <div className="main-container">
        <LeftComponent />
        <InfoComponent />
    </div>
  );
}

export default App;
