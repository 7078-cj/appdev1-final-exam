import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todosSlice";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import '../index.css'; // adjust path if needed

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  // Theme classes
  const todoClass = {
    standard: "todo standard-todo",
    light: "todo light-todo",
    darker: "todo darker-todo",
  }[theme];

  const buttonClass = {
    standard: "check-btn standard-button",
    light: "check-btn light-button",
    darker: "check-btn darker-button",
  }[theme];

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={todoClass}>
      <li className={todo.completed ? "completed" : ""}>{todo.title}</li>
      <button className={buttonClass} onClick={toggleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button
        className={buttonClass.replace("check-btn", "delete-btn")}
        onClick={removeTodo}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
