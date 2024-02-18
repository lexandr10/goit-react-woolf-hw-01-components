import stl from './FriendListItem.module.css';
export const FriendListItem = ({ listFriends }) => {
  return listFriends.map(({ avatar, name, isOnline, id }) => (
    <li className={stl.item} key={id}>
      <span className={isOnline ? stl.online : stl.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};
