import Navigation from "../Navigation/Navigation";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
