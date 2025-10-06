"use client";
import { useState, useRef } from "react";
import { Search as SearchIcon, X } from "lucide-react";

const demoSearch = [
  {
    id: "01",
    title: "Welcome to Vintora",
    description:
      "Discover the world of vintage fashion with Vintora. Explore our curated collection of timeless pieces that blend classic style with modern trends.",
    imageUrl: "/hero/1.jpg",
  },
  {
    id: "02",
    title: "Sustainable Style",
    description:
      "At Vintora, we believe in sustainable fashion. Our vintage clothing not only offers unique style but also promotes eco-friendly choices by giving new life to pre-loved garments.",
    imageUrl: "/hero/2.jpg",
  },
  {
    id: "03",
    title: "Join the Vintora Community",
    description:
      "Join our vibrant community of fashion enthusiasts and stay updated with the latest trends, reviews, and exclusive offers.",
    imageUrl: "/hero/3.jpg",
  },
  {
    id: "04",
    title: "Vintage Essentials",
    description:
      "Find handpicked essential pieces that bring timeless fashion to your wardrobe.",
    imageUrl: "/hero/4.jpg",
  },
];

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const searchTimeoutRef = useRef(null);

  const response = (searchIn) =>
    demoSearch.filter((item) =>
      item.title.toLowerCase().includes(searchIn.toLowerCase())
    );

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    if (!searchValue.trim()) {
      // Animate closing instead of instantly removing results
      setShouldAnimate(false);
      // Wait for animation to finish before clearing results
      setTimeout(() => {
        setResults([]);
        setIsSearching(false);
      }, 400);
      return;
    }

    setIsSearching(true);
    setShouldAnimate(false);

    searchTimeoutRef.current = setTimeout(() => {
      const searchResults = response(searchValue);
      setResults(searchResults);
      setIsSearching(false);
      // Trigger fade/slide in animation slightly after render
      setTimeout(() => setShouldAnimate(true), 50);
    }, 500);
  };

  const handleClear = () => {
    setSearch("");
    setShouldAnimate(false); // start closing animation
    setTimeout(() => {
      setResults([]);
      setIsSearching(false);
    }, 400);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
  };

  return (
    <div className="max-w-[500px] w-full mx-auto bg-[#f0f0f0] mt-[200px] rounded-xl shadow-md">
      <form className="relative">
        <SearchIcon
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-[8px] text-gray-500"
        />
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          className="w-[500px] h-[56px] px-4 py-2 bg-transparent focus:outline-none focus:ring-0 pl-13"
          placeholder="Search"
        />

        {search.length > 0 && !isSearching ? (
          <button
            onClick={handleClear}
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-[12px] text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        ) : (
          isSearching && (
            <span className="absolute right-4 top-1/2 transform -translate-y-[12px] text-gray-500">
              <svg
                className="size-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="60"
                  strokeDashoffset="20"
                />
              </svg>
            </span>
          )
        )}
      </form>

      <div className="">
        <div
          data-lenis-prevent
          className={`transition-all duration-500 ease-in-out overflow-y-auto ${
            shouldAnimate && results.length > 0
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Results */}
          {!isSearching && results.length > 0 && (
            <div className=" max-h-96">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Empty State (No results found) */}
        {!isSearching && search.length > 0 && results.length === 0 && (
          <div className="p-4 text-center text-gray-500 transition-all duration-500 ease-in-out">
            No results found for &quot;{search}&quot;
          </div>
        )}
      </div>
    </div>
  );
}
