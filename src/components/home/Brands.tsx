import Image from "next/image";

const BRANDS_LIST = [
  {
    label: "Adidas",
    src: "/images/brands/adidas.png",
  },
  {
    label: "Gucci",
    src: "/images/brands/gucci.png",
  },
  {
    label: "versace",
    src: "/images/brands/versace.png",
  },
  {
    label: "Levis",
    src: "/images/brands/levis.png",
  },
  {
    label: "Nike",
    src: "/images/brands/nike.png",
  },
  {
    label: "Chanel",
    src: "/images/brands/chanel1.png",
  },
];

const Brands = () => {
  return (
    <section className="w-full py-7" id="brands">
      <div className="mx-auto max-w-7xl  px-5 sm:px-6">
        <h2 className="section-heading">Brands</h2>
        <div className="flex flex-row flex-wrap items-center justify-between px-4 py-5 max-md:gap-2  md:py-9">
          {BRANDS_LIST.map((brand, i) => (
            <div key={i}>
              <Image
                src={brand.src}
                alt={brand.label}
                width={100}
                height={100}
                className="size-20 object-contain md:size-32 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
