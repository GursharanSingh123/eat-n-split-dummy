import Friend from "./Friend";

export default function FriendList({
  onSelectedFriend,
  selectedFriend,
  friends,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          nameObj={friend}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
