import React, { useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturedCollections({ products, loading }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const collections = useMemo(() => {
    return [...products]
      .filter((item) => item.isFeatured)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }, [products]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 relative">
      <h2 className="text-[#101419] text-[22px] font-bold px-4 pb-3">
        Featured Collections
      </h2>

      {loading ? (
        <div className="flex overflow-x-auto px-4 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="min-w-[200px] h-[280px] bg-gray-200 animate-pulse rounded-xl"
            />
          ))}
        </div>
      ) : (
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 px-4 scroll-smooth no-scrollbar"
          >
            {collections.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`, { state: item })}
                className="cursor-pointer min-w-[200px] max-w-[200px] flex-shrink-0 bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div
                  className="w-full h-[240px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                />
                <div className="p-3 flex flex-col gap-1">
                  <p className="text-[#101419] font-semibold text-sm truncate">
                    {item.name.length > 32 ? item.name.slice(0, 32) + "..." : item.name}
                  </p>
                  <p className="text-[#58728d] text-xs leading-snug">
                    {item.description.length > 60
                      ? item.description.slice(0, 60) + "..."
                      : item.description}
                  </p>
                  <p className="text-[#101419] text-sm font-bold mt-1 text-left">
                    GHS {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
