import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm text-center w-80">
        <h1 className="text-xl font-semibold text-gray-900">Counter App</h1>

        <p className="text-3xl font-bold text-gray-800 mt-4">{count}</p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            +
          </button>

          <button
            onClick={() => {
              if (count === 0) return;
              setCount(count - 1);
            }}
            disabled={count === 0}
            className={`px-4 py-2 border border-gray-300 rounded-lg transition
    ${
      count === 0
        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        : "hover:bg-gray-100 text-gray-800"
    }
  `}
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
