import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-2 md:py-4 font-semibold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <h2 className="text-5xl font-bold text-cyan-700 transition-colors duration-300 hover:text-cyan-500">
              Rentify
            </h2>
          </Link>
          <ul className="flex grow gap-8 items-center text-lg mt-2 font-medium">
            <li>
              <Link
                href="/properties/recent"
                className="relative group text-gray-700 hover:text-cyan-600 transition-colors duration-300"
              >
                Recent
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                href="/properties/top"
                className="relative group text-gray-700 hover:text-cyan-600 transition-colors duration-300"
              >
                Top
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-56 md:w-64 pl-4 pr-4 py-2 rounded-full border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 
                 focus:border-cyan-500 transition duration-300"
            />
          </div>
          <div className="hidden md:block">
            <button
              className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 
               hover:text-cyan-600 transition duration-300 cursor-pointer"
            >
              Theme
            </button>
          </div>
          <div className="hidden md:block">
            <select
              className="px-3 py-2 rounded-lg border border-gray-300 bg-white 
               text-gray-600 focus:outline-none focus:ring-2 
               focus:ring-cyan-500 transition duration-300 cursor-pointer"
            >
              <option value={0}>English</option>
              <option value={1}>Tamil</option>
              <option value={2}>Spanish</option>
              <option value={3}>French</option>
              <option value={4}>Hindi</option>
            </select>
          </div>

          {/* 🔐 Sign In Button */}
          <Link
            href={"/login"}
            className="px-4 py-2 rounded-full bg-cyan-600 text-white text-sm md:text-base
                   hover:bg-cyan-500 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
