import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

export default function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert("You must write something!");

    dispatch(addTodo({ title: text, completed: false }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a task."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button className="todo-btn" type="submit">
        I Got This!
      </button>
    </form>
  );
}
