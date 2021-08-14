import { useAppSelector } from "../store/hooks";
import "../styles/toolsStyles.scss";
import { ITools } from "./types";
import ToolCard from "./ToolCard";
import LogoReact from "../static/logos/logoReact.svg";
import LogoHTML5 from "../static/logos/logoHTML5.svg";
import { toolsArr } from "../constants";



const Tools = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="tools">
      <h2 className="tools-title">Tools i've used in my work</h2>
      <div className="tools-container">
        {toolsArr.map(it => <ToolCard
          src={it.src}
          title={it.title}
          alt={it.alt} />)}
        {/* <div className="tools-card">
          <img className="tools-icon" src={LogoReact} alt="logo" />
          <div className="tools-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            neque ratione voluptas.
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Tools;
