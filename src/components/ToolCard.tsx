import { routes } from "../constants";
import { useAppSelector } from "../store/hooks";
import "../styles/toolCardStyles.scss";
import AboutComponent from "./AboutComponent";
import Contacts from "./ContactsComponent";
import Experience from "./ExperienceComponent";
import Tools from "./ToolsComponent";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import jobRekom from "../static/jobRekom.png";
import { IExperience, ITools } from "./types";
const bounceAnimation = keyframes`${bounce}`;

const ToolCard = (props: ITools) => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <div className="tool-card">
      <img src={props.src} alt={props.alt} />
      <div className="tool-card-info">
        <h4 className="tool-card-title">{props.title}</h4>
      </div>
    </div>
  );
};

export default ToolCard;

