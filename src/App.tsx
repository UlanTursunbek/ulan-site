import "./styles/App.scss";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./constants";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import Experience from "./components/ExperienceComponent";
import Tools from "./components/ToolsComponent";
import Contacts from "./components/ContactsComponent";
import { useAppSelector } from "./store/hooks";
import { selectTheme } from "./store/sampleReducer";
function App() {
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <div className="main-container">
          <NavBar />
          <Route exact path="/" component={AboutComponent} />
          <Route path="/experience" component={Experience} />
          <Route path="/tools" component={Tools} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
