import React from "react";

export default function Search() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-100 bg-[rgba(0,0,0,0.5)]">
      <form>
        <input
          type="text"
          className="max-w-[500px] w-full mx-auto px-4 py-2 rounded"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
