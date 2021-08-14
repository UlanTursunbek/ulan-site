import { useAppSelector } from "../store/hooks";
import "../styles/toolsStyles.scss";
import LogoReact from "../static/logos/logo-react.svg"

const Tools = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="tools">
      <h2 className="tools-title">Tools i've used in my work</h2>
      <div className="tools-icons">
        <div className="tools-card">
          <img className="tools-icon" src={LogoReact} alt="logo" />
          <div className="tools-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            neque ratione voluptas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
