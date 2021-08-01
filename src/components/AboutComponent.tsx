import { useAppSelector } from "../store/hooks";
import "../styles/aboutStyles.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const AboutComponent = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <div className="about">
      <div className="top-row">
        <div>ULAN TURSUNBEK</div>
        <div>
          <button type="button">
            <FaLinkedin />
          </button>
          <button type="button">
            <FaGithubSquare />
          </button>
        </div>
      </div>
      <div className="mid-row">mid row</div>
      <div className="bot-row">bot row</div>

      {/* <h1>Hi! </h1>
      <p>
        Greetings everyone.
        My name is Ulan,
        I'm front-end developer located in Bishkek, Kyrgyzstan.
        I have a serious passion in converting design and ideas to UI and creating intuitive,
        dynamic user experience
        Well-organizated person, problem solver, huge fan of FC Arsenal, London.
        Interested in the entire frontend spectrum
      </p> */}
    </div>
  );
};

export default AboutComponent;
