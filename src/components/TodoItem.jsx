import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todosSlice";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

 // adjust path if needed

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
    standard: "button standard-button",
    light: "button light-button",
    darker: "button darker-button",
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

      <button className={buttonClass} onClick={removeTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
