import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      {/* Left - Home */}
      <Link to="/" className="text-lg font-semibold text-gray-900">
        React Machine Coding Works.
      </Link>

      {/* Right - Links */}
      <div className="flex items-center gap-6">
        <Link
          to="https://github.com/psudocode-monk/machine-coding-test"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          Docs
        </Link>

        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          Search
        </Link>
      </div>
    </nav>
  );
}
