import stl from './friends.module.css';
export const GenerateFriends = ({ listFriends }) => (
  <ul className={stl.list}>
    {listFriends.map(({ avatar, name, isOnline, id }) => (
      <li className={stl.item} key={id}>
        <span className={isOnline ? stl.online : stl.offline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
);
