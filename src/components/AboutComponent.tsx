import { useAppSelector } from "../store/hooks";
import "../styles/infoComponent.scss";

const AboutComponent = () => {
  // const { route } = useAppSelector((state) => state.route);
  return (
    <div className="info">
      <h1>Hi! </h1>
      <p>
        Greetings everyone.
        My name is Ulan,
        I'm front-end developer located in Bishkek, Kyrgyzstan.
        I have a serious passion in converting design and ideas to UI and creating intuitive,
        dynamic user experience
        Well-organizated person, problem solver, huge fan of FC Arsenal, London.
        Interested in the entire frontend spectrum
      </p>
    </div>
  );
};

export default AboutComponent;
