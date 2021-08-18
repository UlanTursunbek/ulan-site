import { useAppSelector } from "../store/hooks";
import "../styles/toolsStyles.scss";
import { ITools } from "./types";
import ToolCard from "./ToolCard";
import LogoReact from "../static/logos/logoReact.svg";
import LogoHTML5 from "../static/logos/logoHTML5.svg";
import { toolsArr } from "../constants";
import styled, { keyframes } from "styled-components";
import {
  flipInX,
  bounceInRight,
  bounceInDown,
  bounceInLeft,
} from "react-animations";

const flipInXAnimation = keyframes`${flipInX}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;



const Tools = () => {
  const { route } = useAppSelector((state) => state.route);
  return (
    <ToolsContainer className="tools">
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
    </ToolsContainer>
  );
};

export default Tools;

const ToolsContainer = styled.div`
  .tools {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundMain};
    color: ${(props) => props.theme.colorMain};

    &-title {
      animation-duration: 1s;
      animation-name: ${bounceInDownAnimation};
      font-family: "Georama", sans-serif;
      font-size: 32px;
      /* position: absolute;
    top: 10%;
    left: 40%; */
    }
    &-container {
      animation-duration: 1s;
      animation-name: ${flipInXAnimation};
      display: flex;
      flex-wrap: wrap;
      width: 50%;
    }
  }
`;
