import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around py-6 text-white bg-zinc-900 transition-colors">
      <Link
        to="/"
        className="bg-slate-800 hover:bg-slate-600 rounded-lg px-2 py-1 transition-colors"
      >
        Task App
      </Link>
      <Link
        to="/add"
        className="bg-green-700 hover:bg-green-900 rounded-lg px-2 py-1 transition-colors"
      >
        + Add Task
      </Link>
    </div>
  );
};

export default Header;
