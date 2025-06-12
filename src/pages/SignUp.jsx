import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-[#e7edf4] bg-white">
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
          onClick={() => navigate("/signin")}
          className="text-sm font-medium text-black border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-600 hover:text-white transition"
        >
          Sign In
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 sm:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
            Create an account
          </h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">First Name *</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Last Name *</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Username *</label>
              <input
                type="text"
                placeholder="yourusername"
                className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Email *</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Password *</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">Confirm Password *</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Phone *</label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Country *</label>
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 h-12 border border-[#cedbe8] rounded-lg text-black placeholder:text-gray-400 focus:ring-1 focus:ring-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                className="w-full border border-[#cedbe8] px-4 py-2 rounded-lg file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-600 file:text-white hover:file:bg-gray-700"
              />
            </div>

            <div className="flex items-center gap-2 text-black">
              <input type="checkbox" className="w-4 h-4 border-gray-400" />
              <label className="text-sm">I agree to the Terms of Service</label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-600 text-white font-semibold py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-black mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/signin")}
              className="underline font-semibold"
            >
              Sign In
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
