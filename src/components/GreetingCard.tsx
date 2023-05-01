import React from "react";

import { Play } from "lucide-react";
import Image from "next/image";

interface GreetingCardProps {
    title: string;
    image: string;
}

const GreetingCard = ({ title, image }: GreetingCardProps) => {
  return <a href="" className="flex items-center gap-3 overflow-hidden ease-in rounded duration-400 bg-white/5 hover:bg-white/10">
    <Image src={image} width={102} height={102} alt={title} />
    <strong>{title}</strong>

    <button className="flex items-center justify-center p-2 ml-auto mr-8 text-black bg-green-400 rounded-full shadow-lg ">
      <Play className="pl-1" />
    </button>
  </a>;
};

export default GreetingCard;
