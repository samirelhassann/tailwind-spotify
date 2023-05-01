import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Footer from "@/components/Footer";
import GreetingCard from "@/components/GreetingCard";
import Sidebar from "@/components/Sidebar";
import SuggestionAlbumCard from "@/components/SuggestionAlbumCard";

import saturnAlbumImage from "/public/saturn-album.jpg";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/20">
              <ChevronLeft />
            </button>

            <button className="p-1 rounded-full bg-black/20">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
            <GreetingCard title="Saturn - Sleeping at Last" image={saturnAlbumImage} />
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Made from Samir El Hassan</h2>

          <div className="flex flex-wrap gap-4 mt-4 ">

            <SuggestionAlbumCard
              title="Daily Mix 1"
              image={saturnAlbumImage}
              description="redknobs, leo Zane, Poetic papaya and more"
            />

            <SuggestionAlbumCard
              title="Daily Mix 1"
              image={saturnAlbumImage}
              description="redknobs, leo Zane, Poetic papaya and more"
            />
          </div>

        </main>
      </div >

      <Footer />

    </div >
  );
}
