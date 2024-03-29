// next
import Link from "next/link";
import React from "react";
// icons
import { Linkedin, GithubIcon } from "lucide-react";

const dataSocial = [
  {
    name: "Github",
    value: "aliseyedi01",
    icon: <GithubIcon />,
    color: "text-indigo-500",
    link: "https://github.com/aliseyedi01",
  },
  {
    name: "LinkedIn",
    value: "aliseyedi01",
    icon: <Linkedin />,
    color: "text-green-700",
    link: "https://www.linkedin.com/in/aliseyedi01/",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex  w-full justify-around ">
      {dataSocial.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          target="_blank"
          className="flex cursor-pointer  items-center justify-center gap-6"
        >
          <span className={`text-2xl  md:text-3xl ${item.color}`}>
            {item.icon}
          </span>
          <div className="font-kanit">
            <p className="rtl:font-arSans font-bold capitalize">{item.name}</p>
            <p>{item.value}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
