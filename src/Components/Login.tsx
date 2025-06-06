import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    console.log("Logged in with", { email, password });
    // Add your login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md p-6 sm:p-8 md:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-4">Community Leads Login</h2>
        <p className="text-gray-500 mb-6">Welcome back!</p>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Community Email Address"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md 
                       bg-[url('/email.png')] bg-no-repeat bg-[left_0.75rem_center] 
                       bg-[length:1rem_1rem] placeholder:text-gray-400 placeholder:font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-md 
                       bg-[url('/padlock.png')] bg-no-repeat bg-[left_0.75rem_center] 
                       bg-[length:1rem_1rem] placeholder:text-gray-400 placeholder:font-semibold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={showPassword ? "/eye-open.png" : "/eye-close.png"}
              alt="toggle visibility"
              className="w-7 h-5"
            />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" /> Remember for 30 days
          </label>
          <a href="#" className="text-green-900 underline text-sm font-semibold">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white p-2 rounded-lg mb-4 hover:bg-black"
        >
          Log in
        </button>

        <button
          type="button"
          className="w-full border border-gray-300 p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5 inline mr-2" />
          Sign in with Google
        </button>

        <p className="text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <span className="text-green-900 font-bold cursor-pointer">Create one</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
