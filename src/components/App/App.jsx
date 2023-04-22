import PropTypes from 'prop-types';
import { Profile } from "../Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = ({userData, statsData, friendsData, transactions}) => {
  return <div>
    <Profile userData={userData} />
    <Statistics statsData={statsData} />
    <FriendList friendsData={friendsData} />
    <TransactionHistory transactions={transactions} />
  </div>
};

App.propTypes = {
  userData: PropTypes.object,
  statsData: PropTypes.array,
  friendsData: PropTypes.array,
  transactions: PropTypes.array
};
