import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import stl from './friends.module.css';
export const Friends = ({ listFriends }) => (
  <ul className={stl.list}>
    <FriendListItem listFriends={listFriends}></FriendListItem>
  </ul>
);
