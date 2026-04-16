import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMsg("All fields are required");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long");
      return;
    }

    setErrorMsg("");
    console.log({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6 border border-gray-200 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Controlled Form
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
          />

          {errorMsg && (
            <div className="px-3 py-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
