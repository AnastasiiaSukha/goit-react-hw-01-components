import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Statistics } from './Statistics/Statistics';
import { StatsSection } from './StatsSection/Stats_section';
import { Profile } from "./UserProfile/Profile";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return <div>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <StatsSection title="Upload stats">
        <Statistics stats={data} />
    </StatsSection>

    <FriendList friends={friends} />;
    
    <TransactionHistory items={transactions} />;
  </div>

  

};
