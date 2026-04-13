import { useEffect, useState } from "react";
import { reactQuestions } from "../utils/reactQuestions.js";
import Questions from "./Questions.jsx";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [copy, setCopy] = useState(reactQuestions);

  const handleSearch = () => {
    const filtered = reactQuestions.filter((q) =>
      q.name.toLowerCase().includes(input.toLowerCase()),
    );
    setCopy(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [input]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">
        React Machine Coding Questions
      </h1>
      <p className="text-gray-600 mt-1">Search and explore questions</p>

      {/* Search Bar */}
      <div className="flex gap-2 mt-4">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Search Questions (e.g. Accordion)"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className="px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
          onClick={() => {
            setInput("");
            setCopy(reactQuestions);
          }}
        >
          X
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {copy.length > 0 ? (
          copy.map((q) => (
            <Questions key={q.id} name={q.name} route={q.route} />
          ))
        ) : (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
}
