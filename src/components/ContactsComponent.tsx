import "../styles/contactsStyles.scss";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BounceInDownLine, BounceInLeftDiv, BounceInRightDiv } from "./StyledAnimations";

const bounceAnimation = keyframes`${bounceInRight}`;

const Contacts = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <div className="contacts">
      <BounceInLeftDiv>
        <div className="contacts-links">
          <button type="button">
            <FaWhatsapp />
          </button>
          <button type="button">
            <FaTelegramPlane />
          </button>
          <button type="button">
            <FaEnvelope />
          </button>
          <button type="button">
            <FaLinkedinIn />
          </button>
          <button type="button">
            <FaGithub />
          </button>
        </div>
      </BounceInLeftDiv>
      <BounceInDownLine />
      <BounceInRightDiv>
        <div className="contacts-text">
          <span>+996 505 777 414</span>
          <span>+996 505 777 414 | @ruganga</span>
          <span>ulantursunbekdev@gmail.com</span>
          <span>https://www.linkedin.com/in/ulantursunbekuulu</span>
          <span>https://github.com/UlanTursunbek</span>
        </div>
      </BounceInRightDiv>
    </div>
  );
};

export default Contacts;

const StyledInfo = styled.div`
  /* animation: 2s ${bounceAnimation}; */
`;

