import { useAppDispatch } from "../store/hooks";
import { setRoute } from "../store/routeReducer";
import { routes } from "../constants/index";
import "../styles/leftComponent.scss";

const LeftComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="title">
      <div className="logo-container">
        <div className="logo">UT</div>
        <div className="logo-title">web developer</div>
      </div>
      <div className="nav-links">
        <button
          className="link"
          onClick={() => dispatch(setRoute(routes.ABOUT))}
        >
          {routes.ABOUT}
        </button>
        <button
          className="link"
          onClick={() => dispatch(setRoute(routes.EXPERIENCE))}
        >
          {routes.EXPERIENCE}
        </button>
        <button
          className="link"
          onClick={() => dispatch(setRoute(routes.TOOLS))}
        >
          {routes.TOOLS}
        </button>
        <button
          className="link"
          onClick={() => dispatch(setRoute(routes.CONTACTS))}
        >
          {routes.CONTACTS}
        </button>
      </div>
      <div className="theme-buttons">
        <button type="button" className="white"></button>
        <button type="button" className="black"></button>
        <button type="button" className="yellow"></button>
      </div>
      <button className="resume">resume</button>
    </div>
  );
};

export default LeftComponent;
