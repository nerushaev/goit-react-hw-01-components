import FriendItem from "./FriendItem"
import './Friends.css'


export default function FriendList({friends}) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
        <FriendItem
          userName={friend.name}
          userAvatar={friend.avatar}
          key={friend.id}
          isOnline={friend.isOnline}
          />
          </li>
      ))}
    </ul>
  )
}