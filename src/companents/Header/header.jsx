import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/icon/icon";

export const Header = () => {
  return (
    <div className="header__page">
      <div className="container">
        <div className="header">
          <div className="header__img">
            <Logo />
          </div>
          <div className="header__menu">
            <NavLink className="header__menu__home" to={"/"}>
              Home
            </NavLink>
            <NavLink className="header__menu__about" to={"/about"}>
              About
            </NavLink>
            <NavLink className="header__menu__contact" to={"/contact"}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
