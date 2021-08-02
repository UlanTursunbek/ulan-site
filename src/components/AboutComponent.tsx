import { useAppSelector } from "../store/hooks";
import "../styles/aboutStyles.scss";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import AvatarUlan from "../static/avatarUlan.png";
const AboutComponent = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <div className="about">
      <div className="top-row">
        <div className="top-row-title">ULAN TURSUNBEK</div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/ulantursunbekuulu/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin style={{ color: "white" }} />
          </a>
          <a
            href="https://github.com/UlanTursunbek/ulan-site"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithubSquare style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <div className="mid-row">
        <div className="mid-row-left">
          <img src={AvatarUlan} alt="avatar-ulan" />
        </div>
        <div className="mid-row-right">
          <h3>Hello!</h3>
          <p>
            Greetings everyone. <br />
            My name is Ulan, I'm front-end developer located in Bishkek,
            Kyrgyzstan. <br />I have a serious passion in converting design and
            ideas to UI and <br /> creating intuitive, dynamic user experience{" "}
            <br /> Well-organizated person, problem solver, huge fan of FC
            Arsenal, London. <br /> Interested in the entire frontend spectrum
          </p>
        </div>
      </div>
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
