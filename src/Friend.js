import Button from "./Button";

export default function Friend({ nameObj, onSelectedFriend, selectedFriend }) {
  function setBillFormOpen() {
    onSelectedFriend(nameObj);
    // console.log(selectedFriend);
  }
  function setBillFormClose() {
    // console.log(selectedFriend);
    onSelectedFriend(null);
  }
  return (
    <li>
      <img src={nameObj.image} alt="profile pic" />
      <div>
        <h3>{nameObj.name}</h3>
        {nameObj.balance === 0 && <p>You and {nameObj.name} are even.</p>}
        {nameObj.balance < 0 && (
          <p className={nameObj.balance > 0 ? "green" : "red"}>
            You owe {nameObj.name} {Math.abs(nameObj.balance)}₹.
          </p>
        )}
        {nameObj.balance > 0 && (
          <p className={nameObj.balance > 0 ? "green" : "red"}>
            {nameObj.name} owes You {nameObj.balance}₹.
          </p>
        )}
      </div>
      <Button
        onClick={
          selectedFriend === nameObj ? setBillFormClose : setBillFormOpen
        }
      >
        {selectedFriend === nameObj ? "Close" : "Select"}
      </Button>
    </li>
  );
}
