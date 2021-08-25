import "../styles/contactsStyles.scss";
import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { device } from "../constants";
const bounceInDownAnimation = keyframes`${bounceInDown}`;

const Contacts = () => {
  return (
    <StyledContactsContainer>
      <StyledContactsButtons>
        <button type="button">
          <FaWhatsapp /> <span>+7 771 864 90 90</span>
        </button>
        <button type="button">
          <FaTelegramPlane /> <span>+7 771 864 90 90 | @ruganga</span>
        </button>
        <button type="button">
          <FaEnvelope /> <span>ulantursunbekdev@gmail.com</span>
        </button>
        <button type="button">
          <FaLinkedinIn />{" "}
          <span>https://www.linkedin.com/in/ulantursunbekuulu</span>
        </button>
        <button type="button">
          <FaGithub /> <span>https://github.com/UlanTursunbek</span>
        </button>
      </StyledContactsButtons>
    </StyledContactsContainer>
  );
};

export default Contacts;

const StyledContactsButtons = styled.div`
  animation-duration: 1.5s;
  animation-name: ${bounceInDownAnimation};
  /* width: 100%; */
  height: 100%;
  /* margin-left: 40%; */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transition: all 1s;
  color: ${(props) => props.theme.colorMain};
  button {
    margin: 8px 0;
    border-style: none;
    background-color: transparent;
    font-size: 32px;
    color: ${(props) => props.theme.colorMain};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    height: 48px;
    @media ${device.tablet} {
      font-size: 16px;
    }
    span {
      position: relative;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;
    }
    &:hover {
      transition: all 1s;
      color: ${(props) => props.theme.hoverColor};
      background-color: ${(props) => props.theme.hoverBackground};
      span {
        transition: all 1s;
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
`;

const StyledContactsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundMain};
  display: flex;
  justify-content: center;
  align-items: center;
`;
