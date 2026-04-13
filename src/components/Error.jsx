import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-semibold text-gray-900">
        Feature coming soon 🚧
      </h1>

      <p className="text-gray-600 mt-2">Hang tight, this will be built soon.</p>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
      >
        Go Home
      </button>
    </div>
  );
}
