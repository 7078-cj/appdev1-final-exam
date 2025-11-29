import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../features/todos/todosSlice";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

export default function Todos() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "standard"
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return (
    <div>
      <div className="theme-switcher">
        <div onClick={() => setTheme("standard")} className="standard-theme" />
        <div onClick={() => setTheme("light")} className="light-theme" />
        <div onClick={() => setTheme("darker")} className="darker-theme" />
      </div>

      <h1 id="title">Just do it.</h1>

      <AddTodoForm />
      <TodoList />
    </div>
  );
}
