import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import { ThemeContext } from "../ThemeContext";

export default function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  // Map theme to CSS classes
  const inputClass = {
    standard: "standard-input",
    light: "light-input",
    darker: "darker-input",
  }[theme];

  const buttonClass = {
    standard: "standard-button",
    light: "light-button",
    darker: "darker-button",
  }[theme];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert("You must write something!");

    dispatch(addTodo({ title: text, completed: false }));
    setText("");
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          className={`todo-input ${inputClass}`}
          type="text"
          placeholder="Add a task."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className={`todo-btn ${buttonClass}`} type="submit">
          I Got This!
        </button>
      </form>
    </div>
  );
}
