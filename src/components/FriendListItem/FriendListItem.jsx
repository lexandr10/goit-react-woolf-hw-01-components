import stl from './FriendListItem.module.css';
export const FriendListItem = ({ persons: { id, name, avatar, isOnline } }) => {
  return (
    <li className={stl.item} key={id}>
      <span className={isOnline ? stl.online : stl.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
