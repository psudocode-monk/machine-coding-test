import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

function DeleteButton({ onClick }) {
  return (
    <RiDeleteBin6Fill
      onClick={onClick}
      className="text-gray-400 hover:text-red-500 cursor-pointer transition"
    />
  );
}

function Task({ task, onDelete }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 mb-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
      <p className="text-gray-700">{task}</p>
      <DeleteButton onClick={onDelete} />
    </div>
  );
}

export default function Todo() {
  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!task.trim()) {
      setError("Task is required");
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
    };

    setTaskArray((prev) => [...prev, newTask]);
    setTask("");
    setError("");
  };

  const handleDelete = (id) => {
    setTaskArray((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 tracking-tight">
          Todo CRUD
        </h1>

        <div className="mb-5">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
                if (error) setError("");
              }}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition font-medium"
            >
              Add
            </button>

            <button
              onClick={() => setTaskArray([])}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 active:scale-95 transition font-medium"
            >
              Clear
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
          )}
        </div>

        {taskArray.length ? (
          <div>
            {taskArray.map((t) => (
              <Task
                key={t.id}
                task={t.task}
                onDelete={() => handleDelete(t.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-4">No tasks added</p>
        )}
      </div>
    </div>
  );
}
