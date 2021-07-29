import "../styles/infoComponent.scss";
import styled, { keyframes } from "styled-components";
import { bounceInRight } from "react-animations";

const bounceAnimation = keyframes`${bounceInRight}`;

const Contacts = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <StyledInfo>
      contacts text
    </StyledInfo>
  );
};

export default Contacts;

const StyledInfo = styled.div`
  /* animation: 2s ${bounceAnimation}; */
`;

