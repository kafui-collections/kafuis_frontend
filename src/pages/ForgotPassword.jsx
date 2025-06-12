import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-4 border-b border-[#e7edf4] bg-white">
        <div
          className="flex items-center gap-2 text-[#0d141c] cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <svg viewBox="0 0 48 48" className="w-5 h-5" fill="currentColor">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
          </svg>
          <h2 className="text-lg font-bold">Kafui's Collection Gh</h2>
        </div>
{/* 
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0d141c]">
          <a href="#">New Arrivals</a>
          <a href="#">Featured</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Accessories</a>
        </nav> */}

        {/* <div className="flex gap-2">
          <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#e7edf4] text-[#0d141c]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#e7edf4] text-[#0d141c]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
            </svg>
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#e7edf4] text-[#0d141c]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
            </svg>
          </button>
        </div> */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white text-center">
          <h1 className="text-[28px] font-bold text-[#0d141c] pb-3">Reset Password</h1>
          <p className="text-base text-[#0d141c] mb-6">
            Enter the email address associated with your account, and we'll send you a link to reset your password.
          </p>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-4 border border-[#cedbe8] bg-gray-50 rounded-lg text-[#0d141c] placeholder:text-[#49739c] focus:outline-none focus:ring-1 focus:ring-[#cedbe8]"
            />
            <button
              type="submit"
              className="w-full bg-[#e7edf4] text-[#0d141c] text-sm font-bold py-3 rounded-lg hover:bg-[#d4e1ec] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-[#101419] py-6 border-t border-[#e7edf4]">
        &copy; {new Date().getFullYear()} Kafui's Collection Gh. All rights reserved.
      </footer>
    </div>
  );
}
