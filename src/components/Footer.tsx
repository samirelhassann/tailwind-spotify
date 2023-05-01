import React from "react";

import { Laptop2, List, Maximize2, Mic2, Play, Repeat2, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

import saturnAlbumImage from "/public/saturn-album.jpg";

const Footer = () => {
  return <footer className="flex items-center justify-between px-6 py-4 border-t bg-zinc-900 border-zinc-800">
    <div className="flex items-center gap-2">
      <Image
        src={saturnAlbumImage}
        width={80}
        height={80}
        alt="Saturn album" />
      <div className="flex flex-col">
        <strong className="text-sm">Saturn</strong>
        <span className="text-xs text-zinc-400">Sleeping at last</span>
      </div>
    </div>

    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center gap-5">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20} className="text-zinc-200" />
        <button className="p-2 text-black bg-white rounded-full">
          <Play className="pl-1" />
        </button>
        <SkipForward size={20} className="text-zinc-200" />
        <Repeat2 size={20} className="text-zinc-200" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-80 bg-zinc-600">
          <div className="w-10 h-1 rounded-full bg-zinc-200"></div>
        </div>
        <span className="text-xs text-zinc-400">02:51</span>
      </div>

    </div>

    <div className="flex items-center gap-4">
      <Mic2 size={20} className="text-zinc-200" />
      <List size={20} className="text-zinc-200" />
      <Laptop2 size={20} className="text-zinc-200" />
      <div className="flex items-center gap-0.5 mx-2">
        <Volume size={20} className="text-zinc-200" />
        <div className="w-24 h-1 rounded-full bg-zinc-600">
          <div className="w-16 h-1 rounded-full bg-zinc-200"></div>
        </div>
      </div>
      <Maximize2 size={20} className="text-zinc-200" />

    </div>
  </footer>;
};

export default Footer;
