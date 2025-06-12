import React, { useEffect, useState } from "react";
import axios from "axios";
import NewArrivals from "../components/NewArrivals";
import FeaturedCollections from "../components/FeaturedCollections";
import BestSellers from "../components/BestSellers";
import Promotions from "../components/Promotions";
import Shoes from "../components/Shoes";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      <div className="flex flex-col grow">
        {/* Header */}
        <Header isSignedIn={false} />

        {/* Hero + Main Sections */}
        <main className="flex justify-center py-5 px-4 md:px-40">
          <div className="flex flex-col w-full max-w-[960px]">
            <section
              className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 min-h-[480px] rounded-xl text-white text-center"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://hcillqvmgttdyhwzkffs.supabase.co/storage/v1/object/sign/external/kafui.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zMWQ5NmFkMS1lMGNlLTQ4NTctYTk3Ni1lMjA2MGU0MmM4NTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJleHRlcm5hbC9rYWZ1aS5QTkciLCJpYXQiOjE3NDk3MzI5MTIsImV4cCI6MjA2NTA5MjkxMn0.-z-RA4lKXPSPvKQpHczEhivS2tTf7gnhujU0V2xx75k")',
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  Discover Your Style
                </h1>
                <h2 className="text-sm md:text-base font-normal">
                  Explore our curated collection of clothing for every age and
                  occasion.
                </h2>
              </div>
              <button className="mt-4 bg-[#d2e2f3] text-[#101419] text-sm md:text-base font-bold px-5 py-2 md:py-3 rounded-xl">
                Shop Now
              </button>
            </section>

            {/* Components now receiving shared product data */}
            <NewArrivals products={products} loading={loading} />
            <FeaturedCollections products={products} loading={loading} />
            <Shoes products={products} loading={loading} />
            <BestSellers products={products} loading={loading} />
            <Promotions products={products} loading={loading} />
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col">
            <div className="flex flex-wrap items-center justify-center gap-6 px-5 py-10 text-center">
              {["Customer Service", "About Us", "Contact", "Social Media"].map(
                (text) => (
                  <a
                    key={text}
                    className="text-[#58728d] text-base font-normal min-w-40"
                    href="#"
                  >
                    {text}
                  </a>
                )
              )}
            </div>
            <div className="flex justify-center gap-4">
              {["Twitter", "Instagram", "Facebook"].map((icon) => (
                <div
                  key={icon}
                  className="text-[#58728d] w-6 h-6 bg-gray-200 rounded-full"
                  aria-label={icon}
                ></div>
              ))}
            </div>
            <p className="text-[#58728d] text-base font-normal text-center py-6">
              © 2024 Kafui's Collection Gh. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
