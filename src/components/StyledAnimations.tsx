import styled, { keyframes } from "styled-components";
import {
  flipInX,
  bounceInRight,
  bounceInDown,
  bounceInLeft,
} from "react-animations";

const flipInXAnimation = keyframes`${flipInX}`;
const bounceInRightAnimation = keyframes`${bounceInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

export const FlipDiv = styled.div`
  animation: 1s ${flipInXAnimation};
`;
interface IBounceInRightDiv {
  delay?: string;
}

// const Title = styled.h1<TitleProps>`
export const BounceInRightDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInRightAnimation};
`;

export const BounceInDownDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay};
  animation-name: ${bounceInDownAnimation};
`;

export const BounceInLeftDiv = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInLeftAnimation};
`;

export const BounceInDownLine = styled.div<IBounceInRightDiv>`
  animation-duration: ${(props) => props.delay || "1.5s"};
  animation-name: ${bounceInDownAnimation};
  border: 1px solid black;
  height: 230px;
`;

interface INavigationProps {
  color: string;
  backgroundcolor: string;
}
export const NavigationContainer = styled.div`
  color: ${(props) => props.theme.colorText};
  background: ${(props) => props.theme.backgroundNav};
  display: flex;
  flex-direction: column;
  width: 128px;
  height: 100vh;
  justify-content: space-between;

  animation-duration: 1.5s;
  animation-name: ${bounceInLeftAnimation};
  font-family: Bebas Neue;
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${(props) => props.theme.backgroundLogo};

    .logo {
      color: ${(props) => props.theme.colorLogo};
      font-size: 64px;
    }
  }
  .nav-links {
    display: flex;
    transform: rotate(90deg);
    position: relative;
    justify-content: center;
    .link {
      text-decoration: none;
      padding: 16px;
      color: ${(props) => props.theme.colorText};

      &:hover {
        background-color: ${(props) => props.theme.hoverBackground};
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
  .theme-button {
    display: flex;
    align-content: center;
    justify-content: center;
    border-style: none;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    margin: 16px;
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
  .resume-button {
    border-style: none;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    padding-bottom: 32px;
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

export const AboutContainer = styled.div`
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
