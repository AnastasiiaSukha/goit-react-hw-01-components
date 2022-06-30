import user from 'user.json';
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
  </div>
    
};
