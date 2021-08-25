import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTheme, setTheme } from "../../store/sampleReducer";
import { device, navLinks } from "../../constants/index";
import "../../styles/navbar.scss";
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
  const { pathname } = window.location;
  console.log(window.location);
  const isActive = (pathname: string) => {
    if (pathname === "/") return true;
    return false;
  };

  return (
    <NavigationContainer isActive={isActive(pathname)}>
      <Link to="/" className="logo-container">
        <span className="logo">UT</span>
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
        onClick={handleToggleTheme}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
      <a
        href="../../../public/resumeUlan.pdf"
        className="resume-button"
        target="_blank"
        download
      >
        resume
      </a>
    </NavigationContainer>
  );
};

export default NavBar;
interface INavProps {
  isActive: boolean;
}
const NavigationContainer = styled.div<INavProps>`
  color: ${(props) => props.theme.colorText};
  background: ${(props) => props.theme.backgroundNav};
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  animation-duration: 1.5s;
  animation-name: ${bounceInLeftAnimation};
  font-family: Bebas Neue;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme }) => theme.backgroundLogo};
    color: ${(props) => props.theme.colorLogo};
    @media ${device.tablet} {
      padding: 8px 10px;
    }
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
    .logo {
      font-size: 32px;
    }
  }
  .nav-links {
    display: flex;
    position: relative;
    justify-content: center;
    .link {
      text-decoration: none;
      padding: 16px;
      @media ${device.tablet} {
        padding: 8px;
      }
      color: ${(props) => props.theme.colorText};

      &:hover {
        background-color: ${(props) => props.theme.hoverBackground};
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
  .theme-button {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    border-style: none;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    padding: 16px;

    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
  .resume-button {
    position: relative;
    border-style: none;
    background-color: transparent;
    color: ${(props) => props.theme.colorText};
    padding: 16px;
    /* margin-bottom: 32px; */
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.theme.hoverBackground};
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;
