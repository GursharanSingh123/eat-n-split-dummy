import { useState } from "react";
import Button from "./Button";
import BillSplitForm from "./BillSplitForm";
import NewFriendForm from "./NewFriendForm";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setselectedFriend] = useState(null);
  function handleAdd() {
    setIsAddOpen((iao) => !iao);
    // console.log(isAddOpen);
  }
  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleSplitFormSubmit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriend={setselectedFriend}
          selectedFriend={selectedFriend}
        />
        {!isAddOpen && <Button onClick={handleAdd}>Add friend</Button>}
        {isAddOpen && (
          <NewFriendForm
            onSubmitAddForm={handleAdd}
            onAddFriend={handleAddFriends}
          />
        )}
        {isAddOpen && <Button onClick={handleAdd}>Close</Button>}
      </div>
      {selectedFriend && (
        <BillSplitForm
          selectedFriend={selectedFriend}
          onSplitFormSubmit={handleSplitFormSubmit}
        />
      )}
    </div>
  );
}
