import React from "react";
import { useNavigate } from "react-router-dom";
import { Shirt, ShoppingBag, Footprints, Glasses } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4 border-b border-[#e7edf4] bg-white">
        <div
          className="flex items-center gap-2 text-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg viewBox="0 0 48 48" className="w-5 h-5" fill="currentColor">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
          </svg>
          <h2 className="text-lg font-bold">Kafui's Collection</h2>
        </div>

        <button
          onClick={() => navigate("/signup")}
          className="text-sm font-medium text-black border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white transition"
        >
          Sign Up
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          {/* Icons */}
          <div className="flex justify-center gap-6 mb-6 text-black">
            <Shirt className="w-6 h-6" title="Clothing" />
            <ShoppingBag className="w-6 h-6" title="Bags" />
            <Footprints className="w-6 h-6" title="Shoes" />
            <Glasses className="w-6 h-6" title="Accessories" />
          </div>

          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Welcome Back
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mb-1 uppercase tracking-wide"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mb-1 uppercase tracking-wide"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full h-12 px-4 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-black">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black border-[#cedbe8] rounded focus:ring-0"
                />
                Remember me
              </label>
              <a href="#" className="hover:underline font-medium text-black" onClick={() => navigate("/reset-password")}
>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white text-sm font-bold py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-black mt-4">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="underline font-semibold"
            >
              Sign up
            </button>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-black py-6 border-t border-[#e7edf4]">
        &copy; {new Date().getFullYear()} Kafui's Collection. All rights reserved.
      </footer>
    </div>
  );
}
