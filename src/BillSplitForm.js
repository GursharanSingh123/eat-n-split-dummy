import { useState } from "react";
import Button from "./Button";

export default function BillSplitForm({ selectedFriend, onSplitFormSubmit }) {
  const [billAmount, setBillAmount] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [billPayer, setBillPayer] = useState("you");
  const friendExpense = billAmount ? billAmount - yourExpense : "";

  function handleSubmitSplitForm(e) {
    e.preventDefault();
    if (!billAmount || !yourExpense) return;

    onSplitFormSubmit(billPayer === "you" ? friendExpense : -yourExpense);
  }
  // function setBalnce() {
  //   balance = billPayer === "you" ? friendExpense : -yourExpense;
  // }
  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        type="number"
        placeholder="Amount..."
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />

      <label>🕴️Your expense</label>
      <input
        type="number"
        placeholder="Your part..."
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
      <input disabled value={friendExpense} />

      <label>🤑Who is paying the bill?</label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={handleSubmitSplitForm}>Split bill</Button>
    </form>
  );
}
