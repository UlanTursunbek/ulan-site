import "../styles/toolCardStyles.scss";
import styled, { keyframes } from "styled-components";
import { ITools } from "./types";
import { flipInX } from "react-animations";
const flipInXAnimation = keyframes`${flipInX}`;

interface IToolsComponent {
  delay?: string;
}

const ToolCard = (props: ITools) => {
  return (
    <ToolsCard className="tool-card" delay={props.delay}>
      <img src={props.src} alt={props.alt} />
      <div className="tool-card-info">
        <h4 className="tool-card-title">{props.title}</h4>
      </div>
    </ToolsCard>
  );
};

export default ToolCard;

const ToolsCard = styled.div<IToolsComponent>`
  animation-duration: ${(props) => props.delay || "1s"};
  animation-name: ${flipInXAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    width: 64px;
    height: 64px;
  }
  .tool-card-info {
    font-family: "Georama", sans-serif;
    margin-top: 16px;
  }
  .tool-card-description {
    font-size: 12px;
    margin-top: 16px;
  }
`;
