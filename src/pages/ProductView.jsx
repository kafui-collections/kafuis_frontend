import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductView() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = Array.isArray(product.sizes)
  ? product.sizes
  : product.sizes?.split(',').map(s => s.trim()) || [];

const colors = Array.isArray(product.colors)
  ? product.colors
  : product.colors?.split(',').map(c => c.trim()) || [];

  if (!product) {
    return (
      <div className="px-4 py-10 text-center text-gray-600">
        <p>Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">
              Kafui's Collection
            </h2>
          </div>
          <div className="flex items-center gap-9">
            {["New Arrivals", "Men", "Women", "Accessories", "Sale"].map((item) => (
              <a key={item} className="text-[#0d141c] text-sm font-medium leading-normal" href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#49719c] flex bg-[#e7edf4] items-center justify-center pl-4 rounded-l-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search"
                className="form-input w-full flex-1 resize-none overflow-hidden rounded-xl bg-[#e7edf4] px-4 text-[#0d141c] placeholder-[#49719c] text-base font-normal leading-normal rounded-l-none"
              />
            </div>
          </label>
          <div className="flex gap-2">
            {["Heart", "ShoppingBag"].map((icon, i) => (
              <button key={i} className="flex items-center justify-center rounded-full h-10 w-10 bg-[#e7edf4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d={
                    icon === "Heart"
                      ? "M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32Z"
                      : "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                  }></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <main className="flex justify-center py-5 px-4 md:px-40">
        <div className="flex flex-col w-full max-w-[960px]">
          {/* Breadcrumbs */}
          <div className="flex gap-2 text-sm text-[#49719c] px-2 pb-2">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Title + Desc */}
          <div className="px-2 pb-3">
            <h1 className="text-[#0d141c] text-3xl font-bold">{product.name}</h1>
            <p className="text-[#49719c] text-sm mt-1 max-w-[600px]">
              {product.description}
            </p>
          </div>

          {/* Image + Options */}
          <div className="flex flex-col md:flex-row gap-6 mt-2">
            <div className="w-full md:w-1/2 px-2">
              <div className="aspect-[3/4] bg-gray-100 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${selectedImage})` }} />
              <div className="flex gap-2 mt-2 overflow-x-auto">
                {product.images?.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`h-16 w-16 rounded-md border cursor-pointer bg-cover bg-center ${selectedImage === img ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 px-2">
              <p className="text-2xl font-bold text-[#101419]">
                GH₵ {product.price.toFixed(2)}
              </p>

              {/* Sizes */}
              {sizes.length > 0 && (
                <>
                  <h3 className="text-[#0d141c] font-semibold text-sm">Select Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 rounded-md border text-xs font-medium ${
                          selectedSize === size
                            ? "border-black text-black ring-2 ring-black"
                            : "border-gray-300 text-[#0d141c] bg-white hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Colors */}
              {colors.length > 0 && (
                <>
                  <h3 className="text-[#0d141c] font-semibold text-sm">Select Color</h3>
                  <div className="flex gap-2 flex-wrap">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-md border text-xs font-medium ${
                          selectedColor === color
                            ? "border-black text-black ring-2 ring-black"
                            : "border-gray-300 text-[#0d141c] bg-white hover:bg-gray-100"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <button
                className="mt-6 bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold text-sm"
                onClick={() => {
                  console.log("Add to cart", {
                    productId: product._id,
                    selectedSize,
                    selectedColor,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col">
          <div className="flex flex-wrap items-center justify-center gap-6 px-5 py-10 text-center">
            {["Customer Service", "About Us", "Contact", "Social Media"].map(
              (text) => (
                <a key={text} className="text-[#58728d] text-base font-normal min-w-40" href="#">
                  {text}
                </a>
              )
            )}
          </div>
          <div className="flex justify-center gap-4">
            {["Twitter", "Instagram", "Facebook"].map((icon) => (
              <div key={icon} className="text-[#58728d] w-6 h-6 bg-gray-200 rounded-full" aria-label={icon}></div>
            ))}
          </div>
          <p className="text-[#58728d] text-base font-normal text-center py-6">
            © 2024 Kafui's Collection Gh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
