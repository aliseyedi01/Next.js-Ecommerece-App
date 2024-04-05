import CommandButton from "@app/(main)/_components/header/command-button";
import { notFound } from "@constants/images";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background md:flex-row md:space-x-48">
      <Image
        src={notFound}
        alt="notfound page"
        width={500}
        height={500}
        className="size-64 rounded-lg md:size-[29rem]"
      />

      <div className="space-y-4 p-5 md:space-y-6">
        <h2 className="text-2xl md:text-4xl">Page Not Found</h2>
        <p className="w-full text-wrap text-base md:w-96">
          We are sorry , the page you requested could not be found , please go
          back to the{" "}
          <Link
            href="/"
            className="font-medium text-blue-500 hover:cursor-pointer"
          >
            homepage
          </Link>{" "}
          or use of below command search
        </p>
        <CommandButton place="page" />
      </div>
    </div>
  );
};

export default NotFound;
