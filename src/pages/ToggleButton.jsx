import { useState } from "react";

export default function ToggleButton() {
  const [status, setStatus] = useState(false);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-gray-900 mb-4">
        Toggle Button
      </h1>

      <button
        onClick={() => setStatus(!status)}
        className={`px-6 py-2 rounded-lg text-white font-medium transition
          ${status ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
        `}
      >
        {status ? "OFF" : "ON"}
      </button>
    </div>
  );
}
