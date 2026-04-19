import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function TodoLocalStorage() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("todos");
      if (stored) {
        setTodos(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to parse todos", err);
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) {
      setError("Todo is required");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
    setError("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-6 border border-gray-200 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Todo (LocalStorage)
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`flex-1 px-4 py-2 border rounded-md outline-none focus:ring-1
                ${error ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-black"}
              `}
            />

            <button
              onClick={addTodo}
              className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition whitespace-nowrap"
            >
              Add
            </button>
          </div>

          {error && <p className="text-red-500 text-sm ml-1">{error}</p>}
        </div>

        <div className="mt-6 flex flex-col gap-2">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between border border-gray-200 rounded-md px-4 py-2 hover:shadow-sm transition"
              >
                <span className="text-gray-800 truncate">{todo.text}</span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md hover:bg-red-100 transition"
                >
                  <MdDelete className="text-gray-600 hover:text-red-500" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center mt-2">
              No tasks yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
