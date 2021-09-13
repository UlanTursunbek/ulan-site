import "../styles/toolsStyles.scss";
import ToolCard from "./ToolCard";
import { toolsArr } from "../constants";
import styled, { keyframes } from "styled-components";
import {
  flipInX,
  bounceInDown,
} from "react-animations";

const flipInXAnimation = keyframes`${flipInX}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;



const Tools = () => {
  return (
    <ToolsContainer className="tools">
      <h2 className="tools-title">Tools i've used in my work</h2>
      <div className="tools-container">
        {toolsArr.map((it) => (
          <ToolCard key={it.title} src={it.src} title={it.title} alt={it.alt} />
        ))}
      </div>
    </ToolsContainer>
  );
};

export default Tools;

const ToolsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundMain};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tools {
    background-color: ${(props) => props.theme.backgroundMain};
    color: ${(props) => props.theme.colorMain};

    &-title {
      animation-duration: 1s;
      animation-name: ${bounceInDownAnimation};
      font-family: "Georama", sans-serif;
      font-size: 32px;
      padding-top: 32px;
      padding-bottom: 16px;
    }
    &-container {
      overflow-y: scroll;

      animation-duration: 1s;
      animation-name: ${flipInXAnimation};
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
