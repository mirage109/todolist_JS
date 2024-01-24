import { useState } from "react";
import Style from "./Todo.module.css";
export const AddTodo = ({ addNewToDoToList }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;
    
    const newItem = {
      id: new Date(),
      title: title,
      marked: false,
    };

    addNewToDoToList(newItem);
    setTitle("");
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <label htmlFor="title">Task to do: </label>
      <div>
        <input
          type="text"
          id="title"
          placeholder="Write something"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <button className={Style.button}>Add</button>
      </div>
    </form>
  );
};
