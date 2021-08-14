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

const bounceAnimation = keyframes`${bounce}`;

const CardComponent = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    // <StyledInfo>
    <div className="card">
      <img src={jobRekom} alt="" />
      <div className="card-info">
        <h4 className="card-title">Freelance</h4>
        <span className="card-years">february 2020 - february 2021</span>
        <ol>
          <li>1sdfsd</li>
          <li>2sdfs</li>
          <li>3sdfs</li>
        </ol>
      </div>
    </div>
    // </StyledInfo>
  );
};

export default CardComponent;

// const StyledInfo = styled.div`
//   animation: 1s ${bounceAnimation};
// `;
