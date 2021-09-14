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

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
