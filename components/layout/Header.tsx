import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">🏠 ALX Listing</div>

      {/* Search bar */}
      <div className="flex-1 max-w-xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search properties..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Auth buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-gray-700 hover:text-blue-600">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Categories */}
      <nav className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 md:mt-0">
        {["Rooms", "Mansion", "Countryside", "Villa", "Cabin"].map((cat) => (
          <a
            key={cat}
            href="#"
            className="text-gray-600 hover:text-blue-600 text-sm"
          >
            {cat}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
