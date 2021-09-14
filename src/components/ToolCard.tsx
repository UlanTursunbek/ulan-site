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
      <h4 className="tool-card-title">{props.title}</h4>
    </ToolsCard>
  );
};

export default ToolCard;

const ToolsCard = styled.div<IToolsComponent>`
  animation-duration: ${(props) => props.delay || "1s"};
  animation-name: ${flipInXAnimation};
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  font-family: "Georama", sans-serif;
  margin-top: 8px;
  border-bottom: 1px solid ${(props) => props.theme.backgroundNav};
  padding-bottom: 8px;
  width: 30%;
  /* margin: 16px;
  padding: 16px; */
  /* border-radius: 8px; */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
  .tool-card-info {
    /* font-family: "Georama", sans-serif; */
    /* margin-top: 16px; */
    white-space: nowrap;
  }
`;
