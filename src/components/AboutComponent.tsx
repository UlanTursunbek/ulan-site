import { useAppSelector } from "../store/hooks";
import "../styles/about.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import AvatarUlan from "../static/avatarUlan.png";
import { AboutContainer, BounceInDownDiv, BounceInRightDiv, FlipDiv } from "./StyledAnimations";

const AboutComponent = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <AboutContainer className="about">
      <div className="img-container">
        <BounceInDownDiv delay={"1.5s"}>
          <img src={AvatarUlan} alt="avatar-ulan" />
        </BounceInDownDiv>
      </div>
      <div className="text-container">
        <BounceInRightDiv delay={"1.5s"}>
          <h3>Hello World!</h3>
          <p>
            Greetings everyone. <br />
            My name is <span>Ulan</span>, I'm <span>front-end developer</span>{" "}
            located in Bishkek, Kyrgyzstan. <br />I have a serious passion in
            converting design and ideas to UI and <br /> creating intuitive,
            dynamic user experience <br /> Well-organizated person, problem
            solver, huge fan of FC Arsenal, London. <br /> Interested in the
            entire frontend spectrum
          </p>
        </BounceInRightDiv>
      </div>
    </AboutContainer>
  );
};

export default AboutComponent;
