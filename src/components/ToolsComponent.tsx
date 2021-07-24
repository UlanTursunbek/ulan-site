import { useAppSelector } from "../store/hooks";
import "../styles/infoComponent.scss";

const Tools = () => {
  const { route } = useAppSelector((state) => state.route);
  return <div className="info">tools</div>;
};

export default Tools;
