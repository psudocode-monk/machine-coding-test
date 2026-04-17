import { useState } from "react";
import { MdDelete } from "react-icons/md";

function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md hover:bg-red-100 hover:border-red-300 transition"
    >
      <MdDelete className="text-gray-600 hover:text-red-500" />
    </button>
  );
}

function InputElement({ type, placeholder, onDelete }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
      />
      <DeleteButton onClick={onDelete} />
    </div>
  );
}

export default function DynamicInputs() {
  const [inputs, setInputs] = useState([]);
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [error, setError] = useState("");

  const addInputs = () => {
    if (!type || !placeholder) {
      setError("All fields are required");
      return;
    }

    const newInput = {
      id: Date.now(),
      type,
      placeholder,
    };

    setInputs((prev) => [...prev, newInput]);

    setType("");
    setPlaceholder("");
    setError("");
  };

  const handleDelete = (id) => {
    setInputs((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-6 border border-gray-200 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Dynamic Inputs
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter type of input field"
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Enter placeholder for the input field"
            onChange={(e) => setPlaceholder(e.target.value)}
            value={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-black"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={addInputs}
            className="w-full py-2 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition"
          >
            Add Input Elements
          </button>

          <div className="mt-4">
            {inputs.map((item) => (
              <InputElement
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
