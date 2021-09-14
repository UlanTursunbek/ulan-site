import styled, { keyframes } from "styled-components";
import {
  flipInX,
  bounceInRight,
  bounceInDown,
  bounceInLeft,
} from "react-animations";

export const flipInXAnimation = keyframes`${flipInX}`;
export const bounceInRightAnimation = keyframes`${bounceInRight}`;
export const bounceInDownAnimation = keyframes`${bounceInDown}`;
export const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

export const FlipDiv = styled.div`
  animation: 1s ${flipInXAnimation};
`;
interface IBounceInRightDiv {
  delay?: string;
}

export const BounceInRightDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInRightAnimation};
  width: 100%;
`;

export const BounceInDownDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay};
  animation-name: ${bounceInDownAnimation};
`;

export const BounceInLeftDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInLeftAnimation};
  width: 100%;
`;

export const BounceInDownLine = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInDownAnimation};
  border: 1px solid black;
  height: 230px;
`;

export const AboutContainer = styled.div`
  transition: background-color 1s, color 1s;
  background-color: ${(props) => props.theme.backgroundMain};
  .text-container {
    h3 {
      color: ${(props) => props.theme.colorMain};
    }
    p {
      color: ${(props) => props.theme.colorMain};
    }
  }
`;




export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
