import { routes } from "../constants";
import { useAppSelector } from "../store/hooks";
import "../styles/cardStyles.scss";
import AboutComponent from "./AboutComponent";
import Contacts from "./ContactsComponent";
import Experience from "./ExperienceComponent";
import Tools from "./ToolsComponent";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import jobRekom from "../static/jobRekom.png";
import { IExperience } from "./types";
const bounceAnimation = keyframes`${bounce}`;

const CardComponent = (props: IExperience) => {
  const { route } = useAppSelector((state) => state.route);
  return (
    // <StyledInfo>
      <div className="card">
        <img src={props.src} alt={props.alt} />
        <div className="card-info">
          <h4 className="card-title">{props.title}</h4>
          <span className="card-years">{props.period}</span>
          {props.work.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </div>
      </div>
    // </StyledInfo>
  );
};

export default CardComponent;

// const StyledInfo = styled.div`
//   animation: 1s ${bounceAnimation};
// `;
