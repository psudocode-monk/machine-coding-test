import { Link } from "react-router-dom";

export default function Questions({ name, route }) {
  return (
    <div className="w-64 h-40">
      <Link
        to={route}
        className="flex flex-col justify-between h-full border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-100 transition"
      >
        <h1 className="text-lg font-semibold text-gray-900">{name}</h1>

        <p className="text-sm text-gray-600 truncate">{route}</p>
      </Link>
    </div>
  );
}
