import Profile from './profile/profile';
import { Statistic } from './statistic/statistic';
import { Friends } from './friends.list/friends';
import { Transaction } from './transaction/transaction';

import friendsList from '../data/friends.list.json';
import user from '../data/user.json';
import statusBar from '../data/statistic.json';
import transactions from '../data/transaction.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile data={user}></Profile>
      <Statistic stats={statusBar} title="Upload stats"></Statistic>
      <Friends listFriends={friendsList}></Friends>
      <Transaction pays={transactions}></Transaction>
    </div>
  );
};
