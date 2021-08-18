import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTheme, setRoute, setTheme } from "../../store/routeReducer";
import { lightTheme, navLinks, routes } from "../../constants/index";
import styled from "styled-components";
import "../../styles/navbar.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { useCallback } from "react";
import darkMode from "../static/icons/darkMode.svg";
import lightMode from "../static/icons/lightMode.svg";
import { Link } from "react-router-dom";
import { BounceInDownDiv, NavigationContainer } from "../StyledAnimations";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  console.log(theme);
  return (
    <NavigationContainer>
      <Link to="/" className="logo-container">
        <div className="logo">UT</div>
        <div className="logo-title">web developer</div>
      </Link>
      <div className="nav-links">
        {navLinks.map((it) => (
          <Link className="link" to={`/${it}`}>
            {it}
          </Link>
        ))}
      </div>
      <button
        type="button"
        className="theme-button"
        // theme={theme}
        onClick={handleToggleTheme}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <button className="resume-button">resume</button>
    </NavigationContainer>
  );
};

export default NavBar;
// interface IThemeButtonProps {
//   theme: string;
// }
// const ThemeButton = styled.button<IThemeButtonProps>`
//   width: 16px;
//   height: 16px;
//   border-style: none;
//   span {
//     width: 16px;
//     height: 16px;
//     background-image: url(${(props) =>
//       props.theme === "light" ? darkMode : lightMode});
//     background-size: 100%;
//     background-color: transparent;
//     background-repeat: no-repeat;
//     /* pointer-events: none; */
//   }
// `;

// const Container = styled.div``;
