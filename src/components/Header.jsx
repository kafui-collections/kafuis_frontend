import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ isSignedIn = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (label) => {
    const map = {
      Babies: "Babies Clothing",
      Kids: "Kid's Clothing",
      Women: "Women's Clothing",
      Men: "Men's Clothing"
    };
    const category = map[label];
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <header className="border-b border-[#e9edf1] px-4 md:px-10 py-3 bg-gray-50">
      <div className="flex items-center justify-between">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#101419]">
            <svg className="w-4 h-4" viewBox="0 0 48 48" fill="currentColor">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
            </svg>
            <h2 className="text-lg font-bold">Kafui's Collection Gh</h2>
          </div>
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-[#101419]">
          {["Babies", "Kids", "Women", "Men"].map((label) => (
            <button
              key={label}
              onClick={() => handleCategoryClick(label)}
              className="hover:underline"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-[#e9edf1] rounded-xl h-10 px-3 w-36">
            <svg className="text-[#58728d]" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
          </div>

          {/* Cart */}
          <button className="bg-[#e9edf1] rounded-xl w-10 h-10 flex items-center justify-center text-[#101419]">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Z" />
            </svg>
          </button>

          {/* Auth */}
          {isSignedIn ? (
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://your-avatar-url.jpg")'
              }}
            />
          ) : (
            <button
              onClick={() => navigate("/signin")}
              className="text-sm font-semibold text-[#101419] border border-[#e9edf1] rounded-lg px-3 py-2 hover:bg-gray-100"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="mt-3 md:hidden flex flex-col gap-2 px-4 text-sm font-medium text-[#101419]">
          {["Babies", "Kids", "Women", "Men"].map((label) => (
            <button
              key={label}
              onClick={() => {
                handleCategoryClick(label);
                setMenuOpen(false);
              }}
              className="text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
