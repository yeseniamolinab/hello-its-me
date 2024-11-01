import Image from "next/image";
import React from "react";
import { interBlack, interRegular } from "../fonts/fonts";
import FollowMe from "./FollowMe";

interface HeroWithAvatarProps {
  avatarUrl: string;
}

const HeroWithAvatar: React.FC<HeroWithAvatarProps> = ({ avatarUrl }) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
      <Image
        src={avatarUrl}
        height={150}
        width={150}
        alt="Avatar"
        className="rounded-full aspect-square object-cover"
      />
      <h1
        className={`text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mt-4 ${interBlack.className}`}
      >
        Yesi Molina
      </h1>
      <p
        className={`mt-6 text-base text-zinc-600 dark:text-zinc-400 ${interRegular.className}`}
      >
        Full-stack engineer with over 13 years of experience developing scalable
        software solutions for diverse global teams, including mission-oriented
        nonprofits and fast-growing tech firms.{" "}
      </p>
      <FollowMe />
    </div>
  );
};

export default HeroWithAvatar;
