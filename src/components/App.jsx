import { Profile } from "./Profile/Profile";
import user from "../data/user.json";

const { username, tag, location, avatar, stats } = user;


export const App = () => {
  return (
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  )
};
