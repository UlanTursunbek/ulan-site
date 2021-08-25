import "../styles/about.scss";
import AvatarUlan from "../static/avatarUlan.png";
import styled, { keyframes } from "styled-components";
import { bounceInRight, bounceInDown } from "react-animations";

const bounceInRightAnimation = keyframes`${bounceInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;

const AboutComponent = () => {
  return (
    <AboutContainer className="about">
      <div className="img-container">
        <img src={AvatarUlan} alt="avatar-ulan" />
      </div>
      <div className="text-container">
        <h3>Hello World!</h3>
        <p>
          Greetings everyone. <br />
          My name is <span>Ulan</span>, I'm <span>front-end developer</span>{" "}
          located in Bishkek, Kyrgyzstan. <br />I have a serious passion in
          converting design and ideas to UI and <br /> creating intuitive,
          dynamic user experience <br /> Well-organizated person, problem
          solver, huge fan of FC Arsenal, London. <br /> Interested in the
          entire frontend spectrum
        </p>
      </div>
    </AboutContainer>
  );
};

export default AboutComponent;

export const AboutContainer = styled.div`
  transition: background-color 1s, color 1s;
  background-color: ${(props) => props.theme.backgroundMain};
  .img-container, .text-container {
    animation-duration: 1.5s;
    animation-name: ${bounceInRightAnimation};
  }
  .text-container {
    h3 {
      color: ${(props) => props.theme.colorMain};
    }
    p {
      color: ${(props) => props.theme.colorMain};
    }
  }
`;

export const BounceInDownDiv = styled.div`
  animation-duration: 1.5s;
  animation-name: ${bounceInDownAnimation};
`;

export const BounceInRightDiv = styled.div`
  animation-duration: "1.5s";
  animation-name: ${bounceInRightAnimation};
  width: 100%;
`;
