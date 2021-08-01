import { routes } from "../constants";
import { useAppSelector } from "../store/hooks";
import "../styles/infoComponent.scss";
import AboutComponent from "./AboutComponent";
import Contacts from "./ContactsComponent";
import Experience from "./ExperienceComponent";
import Tools from "./ToolsComponent";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

const InfoComponent = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    // <StyledInfo>
      <div className="info">
        {route === routes.ABOUT && <AboutComponent />}
        {route === routes.EXPERIENCE && <Experience />}
        {route === routes.TOOLS && <Tools />}
        {route === routes.CONTACTS && <Contacts />}
      </div>
    // </StyledInfo>
  );
};

export default InfoComponent;

// const StyledInfo = styled.div`
//   animation: 1s ${bounceAnimation};
// `;
