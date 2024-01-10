import { useState } from "react";
import Button from "./Button";

export default function NewFriendForm({ onSubmitAddForm, onAddFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      image: `${url}?u=${id}`,
      balance: 0,
    };
    onAddFriend(friend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
    onSubmitAddForm(false);
  }
  return (
    <div>
      <form className="form-add-friend ">
        <label>🧑‍🤝‍🧑Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> 🖼️Image URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  );
}
