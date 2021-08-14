import styled, { keyframes } from "styled-components";
import { flipInX, bounceInRight, bounceInDown } from "react-animations";

const flipInXAnimation = keyframes`${flipInX}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const FlipDiv = styled.div`
  animation: 1s ${flipInXAnimation};
`;
interface IBounceInRightDiv {
  delay?: string;
}

// const Title = styled.h1<TitleProps>`
export const BounceInRightDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay};
  animation-name: ${bounceInRightAnimation};
`;

export const BounceInDownDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay};
  animation-name: ${bounceInDownAnimation};
`;
