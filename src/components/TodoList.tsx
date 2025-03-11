import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  // Set up the event listener once when component mounts
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "FETCH_TODOS_RESPONSE") {
        console.log("Received todos in App.tsx:", event.data.response);
        setLoading(false);
        // Make sure we're accessing the correct data structure
        if (event.data.response.success) {
          setTodos(event.data.response.data);
        } else {
          setTodos([]);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); // Empty dependency array means this only runs once

  const handleButtonClick = () => {
    setLoading(true);
    window.postMessage(
      {
        type: "FETCH_TODOS_REQUEST",
        data: { message: "Fetch todos from App.tsx" },
      },
      "*"
    );
  };

  return (
    <div>
      <Button onClick={handleButtonClick} disabled={loading} className="mb-4">
        {loading ? "Loading..." : "Fetch Todos"}
      </Button>

      {todos.length > 0 && (
        <ul className="space-y-2">
          {todos.slice(0, 10).map((todo) => (
            <li key={todo.id} className="p-3 border rounded bg-white shadow-sm">
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
