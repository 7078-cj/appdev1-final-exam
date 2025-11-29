import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todosSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.title}</li>

      <button className="check-btn" onClick={toggleComplete}>
        <i className="fas fa-check"></i>
      </button>

      <button className="delete-btn" onClick={removeTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
