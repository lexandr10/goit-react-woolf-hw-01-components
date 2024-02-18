import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import stl from './friends.module.css';
export const Friends = ({ listFriends }) => {
  return (
    <ul className={stl.list}>
      {listFriends.map(person => (
        <FriendListItem persons={person}></FriendListItem>
      ))}
    </ul>
  );
};
