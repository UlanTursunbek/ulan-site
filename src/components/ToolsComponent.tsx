import ToolCard from "./ToolCard";
import { device, toolsArr } from "../constants";
import styled from "styled-components";
import { bounceInDownAnimation, flipInXAnimation } from "./styled";

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
  overflow-y: scroll;

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
      color: ${(props) => props.theme.colorMain};

      @media ${device.tablet} {
        font-size: 24px;
      }
    }
    &-container {
      animation-duration: 1s;
      animation-name: ${flipInXAnimation};
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 50%;
      @media ${device.tablet} {
        width: 100%;
      }
    }
  }
`;
