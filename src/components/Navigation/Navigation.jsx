import { NavLink } from "react-router";
import css from "../AppHeader/AppHeader.module.css";
import clsx from "clsx";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={getLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getLinkStyles}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
