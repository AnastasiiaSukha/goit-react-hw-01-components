import user from 'user.json';
import data from 'data.json';
import { Statistics } from './Statistics/Statistics';
import { StatsSection } from './StatsSection/Stats_section';
import { Profile } from "./UserProfile/Profile";


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
  </div>

  
};
