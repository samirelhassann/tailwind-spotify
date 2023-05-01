import React from "react";

import { HomeIcon, Library, Search } from "lucide-react";

const Sidebar = () => {
  return <aside className="p-6 w-72 bg-zinc-950">

    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>

    <nav className="mt-10 space-y-5">
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
        <HomeIcon />
                Home
      </a>
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
        <Search />
                Search
      </a>
      <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
        <Library />
                Library
      </a>
    </nav>

    <nav className="flex flex-col gap-3 pt-6 mt-10 border-t max-h-96 border-zinc-800">
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 2</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 3</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 5</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 6</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 7</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 8</a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 9</a>
    </nav>

  </aside>;
};

export default Sidebar;
