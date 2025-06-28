import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./data/friends.json"
import FriendListItem from "./components/FriendListItem/FriendListItem.jsx";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
  
      
      <FriendList friends={friends}/>
  

    </div>
  );
};

export default App;

