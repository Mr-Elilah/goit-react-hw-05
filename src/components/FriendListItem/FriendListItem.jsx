import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="68" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
