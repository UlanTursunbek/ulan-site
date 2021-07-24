import { useAppDispatch } from "../store/hooks";
import { setRoute } from "../store/routeReducer";
import { routes } from "../constants/index";
import "../styles/leftComponent.scss";

const LeftComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="title">
      <div>logo</div>
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
      <div>
        <button>black</button>
        <button>white</button>
        <button>yellow</button>
        <button>resume</button>
      </div>
      <div>social links</div>
    </div>
  );
};

export default LeftComponent;
