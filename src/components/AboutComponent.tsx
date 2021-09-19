import { FC } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import AvatarUlan from "../static/imagesPNG/avatarUlan.png";
import { device } from "../constants";
import { bounceInRightAnimation } from "./styled";

const AboutComponent: FC = () => {
  return (
    <AboutContainer className="about">
      <img src={AvatarUlan} alt="avatar-ulan" />
      <div className="text-container">
        <Typewriter
          options={{
            strings: ["Hello World"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typer-text",
            cursor: "|",
          }}
        />
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

const AboutContainer = styled.div`
  transition: background-color 1s, color 1s;
  background-color: ${(props) => props.theme.backgroundMain};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
  img {
    border-radius: 50%;
    width: 256px;
    height: 256px;
    animation-duration: 1.5s;
    animation-name: ${bounceInRightAnimation};
    -webkit-box-shadow: 1px 1px 5px -3px #000000;
    box-shadow: 1px 1px 5px -3px #000000;
  }
  .text-container {
    animation-duration: 1.5s;
    animation-name: ${bounceInRightAnimation};
    margin-left: 32px;
    font-family: "Georama", sans-serif;
    color: ${(props) => props.theme.colorText};
    @media ${device.tablet} {
      margin: 16px;
    }
    .typer-text {
      font-size: 32px;
      color: ${(props) => props.theme.colorMain};
    }
    .Typewriter__cursor {
      color: ${(props) => props.theme.colorMain};
      font-size: 35px;
      margin-top: 4px;
    }
    p {
      margin-top: 16px;
      span {
        color: ${(props) => props.theme.hoverBackground};
      }
    }
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
