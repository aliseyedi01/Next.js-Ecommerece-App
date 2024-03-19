import Link from "next/link";
import React from "react";

const LISTS = [
  {
    label: "Company",
    items: [
      { label: "About Us", link: "/" },
      { label: "Contact", link: "/" },
      { label: "Affiliates", link: "/" },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "FAQs", link: "/" },
      { label: "Cookie Policy", link: "/" },
      { label: "Terms of Service", link: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col bg-accent font-ubuntu text-accent-foreground ">
      <div className="flex w-full flex-col justify-around p-5 max-md:gap-3 md:flex-row md:p-9">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Online Shop</h3>
          <p className="w-80 text-wrap md:w-96">
            Explore our carefully curated selection of high-quality products
            designed to enhance your lifestyle
          </p>
        </div>

        <nav className="flex flex-wrap  gap-14 md:gap-20">
          {LISTS.map((list) => (
            <div key={list.label} className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">{list.label}</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {list.items.map((item) => (
                  <li key={item.label} className="mr-4 inline-block">
                    <Link href={item.link} className="text-accent-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="text- mb-2 text-sm md:text-left">
        <p className="text-center opacity-75">
          Copyright &copy; {new Date().getFullYear()} Online Shop
        </p>
      </div>
    </footer>
  );
};

export default Footer;