import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <section className={css.profileSection}>
      <div>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}> {username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.amount}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.amount}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.amount}>{likes}</span>
        </li>
      </ul>
    </section>
  );
}
