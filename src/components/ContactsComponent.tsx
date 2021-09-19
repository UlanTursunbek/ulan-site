import { useState } from "react";
import styled from "styled-components";
import { contactLinks, device } from "../constants";
import { bounceInDownAnimation } from "./styled";

const Contacts = () => {
  const [showTooltip, setShowTooltip] = useState<string>("");
  const onMouseEnter = (text: string) => setShowTooltip(text);
  const onMouseLeave = () => setShowTooltip("");

  return (
    <StyledContactsContainer>
      <StyledContactsLinks>
        {showTooltip && <div className="notification">{showTooltip}</div>}
        {contactLinks.map(it => {
          return (
            <a
              href={it.url}
              rel="noreferrer"
              className="contact-link"
              target="_blank"
              onMouseEnter={() =>
                onMouseEnter(it.notificationText)
              }
              onMouseLeave={onMouseLeave}
            >
              <it.icon /> {it.linkText}
            </a>
          );
        }) }
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
