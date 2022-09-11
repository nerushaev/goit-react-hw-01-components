import Profile from "./components/Profile/Profile";
import user from './components/Profile/user.json';

import Statistics from "./components/Statistics/Statistics";
import statData from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transaction from './components/TransactionHistory/transactions.json'

import randomColor from "./components/Statistics/randomColor";


function App() {
  return (
    <div className="App">
      <Profile
        userImg={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}
      />
        <Statistics
        key={statData.id}
        title="Upload stats"
        stats={statData}
        color={randomColor}
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      items={transaction}
      />
      </div>
  );
}

export default App;
