import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  history?: { text: string; updatedAt: Date }[];
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const addTodo = () => {
    if (inputText.trim()) {
      if (editId !== null) {
        // Update existing todo
        setTodos(
          todos.map((todo) =>
            todo.id === editId
              ? {
                  ...todo,
                  text: inputText,
                  updatedAt: new Date(),
                  history: [
                    ...(todo.history || []),
                    { text: todo.text, updatedAt: todo.updatedAt },
                  ],
                }
              : todo
          )
        );
        setEditId(null);
      } else {
        // Add new todo
        setTodos([
          ...todos,
          {
            id: Date.now(),
            text: inputText,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
      setInputText("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo: Todo) => {
    setEditId(todo.id);
    setInputText(todo.text);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button onClick={addTodo}>{editId !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <div className="todo-actions">
              <button onClick={() => startEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              {todo.history && todo.history.length > 0 && (
                <button onClick={() => setShowHistory(!showHistory)}>
                  {showHistory ? "Hide History" : "Show History"}
                </button>
              )}
            </div>
            {showHistory && todo.history && (
              <div className="todo-history">
                <h4>History:</h4>
                <ul>
                  {todo.history.map((entry, index) => (
                    <li key={index}>
                      {entry.text} (Updated: {entry.updatedAt.toLocaleString()})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
