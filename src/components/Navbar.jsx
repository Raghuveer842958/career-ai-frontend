import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-[#242424] bg-[#0f0f0f] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/dashboard">
          <h1 className="font-serif text-2xl text-amber-300 tracking-tight">
            CareerAI
          </h1>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/profile"
            className="text-sm text-[#777] hover:text-amber-300 transition-colors"
          >
            Profile
          </Link>

          <button className="px-4 py-2 rounded-lg bg-[#161616] border border-[#242424] text-[#ccc] hover:border-amber-300/40 hover:text-amber-300 transition-all">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}