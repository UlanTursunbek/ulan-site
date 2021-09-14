import { useState } from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { device } from "../constants";
import { bounceInDownAnimation } from "./styled";
import { useCallback } from "react";

const Contacts = () => {
  const [showTooltip, setShowTooltip] = useState<string>("");
  const onMouseEnter = useCallback(
    (text: string) => setShowTooltip(text),
    [showTooltip]
  );
  const onMouseLeave = useCallback(() => setShowTooltip(""), [showTooltip]);

  return (
    <StyledContactsContainer>
      <StyledContactsLinks>
        {showTooltip && <div className="notification">{showTooltip}</div>}
        <a
          href="https://wa.me/+77718649090?text=Hi! I'm writing you from your site"
          rel="noreferrer"
          className="contact-link"
          target="_blank"
          onMouseEnter={() =>
            onMouseEnter("click to write message via whatsapp")
          }
          onMouseLeave={onMouseLeave}
        >
          <FaWhatsapp /> +7 771 864 90 90
        </a>
        <a
          href="https://telegram.me/ruganga?text=Hi! I'm writing you from your site"
          rel="noreferrer"
          target="_blank"
          className="contact-link"
          onMouseEnter={() =>
            onMouseEnter("click to write message in telegram")
          }
          onMouseLeave={onMouseLeave}
        >
          <FaTelegramPlane /> +7 771 864 90 90 | @ruganga
        </a>
        <a
          href="mailto:ulantursunbekdev@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="contact-link"
          onMouseEnter={() => onMouseEnter("click to write an email")}
          onMouseLeave={onMouseLeave}
        >
          <FaEnvelope /> ulantursunbekdev@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ulantursunbekuulu/"
          rel="noreferrer"
          target="_blank"
          className="contact-link"
          onMouseEnter={() =>
            onMouseEnter("click to connect with me in Linkedin")
          }
          onMouseLeave={onMouseLeave}
        >
          <FaLinkedinIn />
          https://www.linkedin.com/in/ulantursunbekuulu
        </a>
        <a
          href="https://github.com/UlanTursunbek"
          className="contact-link"
          rel="noreferrer"
          target="_blank"
          onMouseEnter={() =>
            onMouseEnter("click to see my latest projects code")
          }
          onMouseLeave={onMouseLeave}
        >
          <FaGithub /> https://github.com/UlanTursunbek
        </a>
      </StyledContactsLinks>
    </StyledContactsContainer>
  );
};

export default Contacts;

const StyledContactsLinks = styled.div`
  animation-duration: 1.5s;
  animation-name: ${bounceInDownAnimation};
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transition: all 1s;
  color: ${(props) => props.theme.colorMain};
  font-family: "Georama", sans-serif;
  .notification {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    animation-duration: 0.5s;
    animation-name: ${bounceInDownAnimation};
    background-color: ${(props) => props.theme.hoverBackground};
    color: ${(props) => props.theme.colorText};
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact-link {
    color: ${(props) => props.theme.colorMain};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    margin-top: 16px;
    font-size: 24px;
    @media ${device.tablet} {
      font-size: 16px;
    }
    svg {
      margin-right: 8px;
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
