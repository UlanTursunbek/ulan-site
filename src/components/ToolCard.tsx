import styled from "styled-components";
import { flipInXAnimation } from "./styled";
import { ITools } from "./types";

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
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  font-family: "Georama", sans-serif;
  margin-top: 8px;
  border-bottom: 1px solid ${(props) => props.theme.backgroundNav};
  padding-bottom: 8px;
  width: 50%;
  white-space: nowrap;
  color: ${(props) => props.theme.colorMain};
  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    padding-left: 16px;
  }
`;
