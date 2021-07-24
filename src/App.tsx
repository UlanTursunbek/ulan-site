import "./styles/App.scss";
import LeftComponent from "./components/Left";
import InfoComponent from "./components/Info";

function App() {
  return (
    <div className="main-container">
      <div className="left-container">
        <LeftComponent />
      </div>
      <div className="info-container">
        <InfoComponent />
      </div>
    </div>
  );
}

export default App;
