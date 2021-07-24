import { useAppSelector } from "../store/hooks";
import "../styles/infoComponent.scss";

const Experience = () => {
  const { route } = useAppSelector((state) => state.route);
  return <div className="info">experience</div>;
};

export default Experience;
