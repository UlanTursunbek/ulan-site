import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTheme, setTheme } from "../../store/sampleReducer";
import { device, navLinks } from "../../constants/index";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { bounceInLeft } from "react-animations";

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

const NavBar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <NavigationContainer>
      <NavLink
        to="/"
        className="logo-container"
        activeClassName="logo-container-active"
      >
        UT
      </NavLink>
      <div className="nav-links">
        {navLinks.map((it) => (
          <NavLink
            key={it}
            className="nav-btn"
            activeClassName="nav-btn-active"
            to={`/${it}`}
          >
            {it}
          </NavLink>
        ))}
      </div>
      <button type="button" className="nav-btn" onClick={handleToggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <Link
        to="../../../public/resumeUlan.pdf"
        className="nav-btn"
        target="_blank"
        download
      >
        resume
      </Link>
    </NavigationContainer>
  );
};

export default NavBar;

const NavigationContainer = styled.nav`
  color: ${(props) => props.theme.colorText};
  background: ${(props) => props.theme.backgroundNav};
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 38px;
  animation-duration: 1s;
  animation-name: ${bounceInLeftAnimation};
  font-family: Bebas Neue;

  .logo-container {
    font-size: 32px;
    position: relative;
    z-index: 10;
    padding: 8px 16px;
    background: ${(props) => props.theme.colorMain};
    color: ${(props) => props.theme.colorText};
    text-decoration: none;
    transition: all ease-in 0.2s;
    &-active {
      background-color: ${(props) => props.theme.hoverBackground};
    }
    @media ${device.tablet} {
      padding: 8px 10px;
    }
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
  .nav-links {
    display: flex;
    position: relative;
    justify-content: center;
  }
  .nav-btn {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    border-style: none;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    padding: 16px;
    text-decoration: none;
    transition: all ease-in 0.2s;
    &-active {
      background-color: ${(props) => props.theme.hoverBackground};
    }
    @media ${device.tablet} {
      padding: 8px;
    }
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

