import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { ShoppingBag } from "lucide-react";

export default function ProductListPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [sizeFilter, setSizeFilter] = useState("all");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const encodedCategory = encodeURIComponent(category);
        const res = await axios.get(`${API_BASE_URL}/products/category/${encodedCategory}`);
        if (Array.isArray(res.data)) {
          setProducts(res.data);
          setOriginalProducts(res.data);
        } else {
          console.error("Expected array but got:", res.data);
          setProducts([]);
          setOriginalProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch category products", err);
        setProducts([]);
        setOriginalProducts([]);
      }
    };
    fetchProducts();
  }, [category]);

  const handleSort = () => {
    const sorted = [...products];
    if (sortOrder === "none" || sortOrder === "desc") {
      sorted.sort((a, b) => a.price - b.price);
      setSortOrder("asc");
    } else {
      sorted.sort((a, b) => b.price - a.price);
      setSortOrder("desc");
    }
    setProducts(sorted);
  };

  const handleSizeFilter = (size) => {
    setSizeFilter(size);
    if (size === "all") {
      setProducts(originalProducts);
    } else {
      const filtered = originalProducts.filter(p => p.sizes.includes(size));
      setProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      <Header isSignedIn={false} />

      {/* Centered Breadcrumb */}
      <div className="flex justify-center px-4 py-4">
        <div className="flex flex-wrap items-center gap-3 text-sm w-full max-w-7xl">
          <a href="/" className="text-[#49719c] font-medium">Home</a>
          <span className="text-[#49719c]">/</span>
          <span className="text-[#0d141c] font-medium">{decodeURIComponent(category)}</span>
        </div>
      </div>

      <main className="flex-grow">
        {/* Title & Description */}
        <div className="flex justify-center px-4">
          <div className="w-full max-w-7xl">
            <h1 className="text-[32px] font-bold text-[#0d141c] leading-tight">{decodeURIComponent(category)}</h1>
            <p className="text-[#49719c] text-sm mt-1 mb-4">
              Explore our curated collection of women's clothing, featuring the latest trends and timeless classics. Find your perfect fit for any occasion.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center px-4">
          <div className="flex flex-wrap items-center gap-3 w-full max-w-7xl mb-6">
            {['all', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                onClick={() => handleSizeFilter(size)}
                className={`px-3 py-1 rounded-lg text-sm border ${sizeFilter === size ? "bg-black text-white" : "bg-[#e7edf4] text-[#0d141c]"}`}
              >
                {size === 'all' ? 'All Sizes' : size}
              </button>
            ))}
            <button
              onClick={handleSort}
              className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
            </button>
          </div>
        </div>

        {/* Product Grid or Empty Message */}
        <div className="flex justify-center px-4">
          <div className="w-full max-w-7xl">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center mt-16 mb-20">
                <ShoppingBag className="w-12 h-12 text-gray-400 mb-4" />
                <h2 className="text-lg font-semibold text-[#0d141c]">No products found</h2>
                <p className="text-sm text-[#49719c]">We couldn’t find any items in this category. Please check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => navigate(`/product/${product._id}`, { state: product })}
                    className="cursor-pointer flex flex-col gap-2 pb-3 hover:shadow-md rounded-lg"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg"
                      style={{ backgroundImage: `url(${product.images?.[0]})` }}
                    ></div>
                    <div className="flex flex-col justify-between h-full">
                      <p className="text-[#0d141c] text-base font-medium leading-normal">{product.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-[#49719c] text-sm">GH₵ {product.price.toFixed(2)}</p>
                        <button
                          className="text-sm font-medium bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Added ${product.name} to cart`);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e7edf4] text-center py-6 px-4 text-sm text-[#49719c]">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#" className="min-w-40">About Us</a>
          <a href="#" className="min-w-40">Contact</a>
          <a href="#" className="min-w-40">Privacy Policy</a>
          <a href="#" className="min-w-40">Terms of Service</a>
        </div>
        <p>@2024 Kafui's Collection. All rights reserved.</p>
      </footer>
    </div>
  );
}
