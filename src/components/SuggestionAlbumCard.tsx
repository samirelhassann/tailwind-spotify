import React from "react";

import Image from "next/image";

interface SuggestionAlbumCardProps {
    title: string;
    image: string;
    description: string;
}

const SuggestionAlbumCard = ({ title, image, description }: SuggestionAlbumCardProps) => {
  return <a href="" className="flex flex-col w-48 gap-4 p-3 rounded bg-white/5 hover:bg-white/10">
    <Image className="self-center rounded" src={image} width={180} height={180} alt={title} />

    <div className="flex flex-col gap-2">
      <strong className="font-semibold" >{title}</strong>
      <span className="text-sm leading-6 text-white/70">
        {description}
      </span>
    </div>
  </a>;
};

export default SuggestionAlbumCard;
