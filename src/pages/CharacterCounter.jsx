import { useEffect, useState } from "react";

export default function CharacterCounter() {
  const [limit, setLimit] = useState("");
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);

  const checkInput = () => {
    if (!limit) return;

    if (input.length === Number(limit)) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  useEffect(() => {
    checkInput();
  }, [input, limit]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-96 border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Character Counter
        </h1>

        <input
          type="number"
          placeholder="Enter character limit"
          onChange={(e) => setLimit(e.target.value)}
          value={limit}
          className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
        />

        <input
          type="text"
          placeholder="Enter your text"
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            if (!limit || value.length <= Number(limit)) {
              setInput(value);
            }
          }}
          className={`w-full mt-3 px-4 py-2 border rounded-lg outline-none focus:ring-2 
    ${flag ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-gray-200"}
  `}
        />

        <p className="text-sm text-gray-500 mt-2">
          {input.length} / {limit || 0}
        </p>

        {flag && (
          <p className="text-sm text-red-500 mt-2">
            Character limit exceeded ({limit})
          </p>
        )}
      </div>
    </div>
  );
}
