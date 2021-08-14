import { useAppSelector } from "../store/hooks";
import "../styles/aboutStyles.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import AvatarUlan from "../static/avatarUlan.png";
import { BounceInDownDiv, BounceInRightDiv, FlipDiv } from "./StyledAnimations";

const AboutComponent = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <div className="about">
      <div className="img-container">
        <BounceInDownDiv delay={"2s"}>
          <img src={AvatarUlan} alt="avatar-ulan" />
        </BounceInDownDiv>
      </div>
      <div className="text-container">
        <BounceInRightDiv delay={"2s"}>
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
    </div>
  );
};

export default AboutComponent;
