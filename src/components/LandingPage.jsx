import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-900">
        React Machine Coding Hub.
      </h1>

      <p className="text-gray-600 mt-3 max-w-md">
        I have practice real-world React machine coding questions. I have
        improved my problem-solving and build production-level UI skills.
      </p>

      <Link
        to="/dashboard"
        className="mt-6 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
      >
        Get Started
      </Link>
    </div>
  );
}
