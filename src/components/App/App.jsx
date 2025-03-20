import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import friendsData from "../../data/friendsData.json";
import userData from "../../data/userData.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../data/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
}
