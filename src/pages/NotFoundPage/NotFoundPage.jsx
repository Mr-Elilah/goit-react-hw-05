import { Link } from "react-router";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <p>
        404 Not Found! Please follow this{" "}
        <Link to="/" className={css.link}>
          link
        </Link>{" "}
      </p>
    </>
  );
}
