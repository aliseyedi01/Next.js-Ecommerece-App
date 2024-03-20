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
    <section className=" p-5 md:px-12">
      <h2 className="text-center  text-3xl font-bold  tracking-widest text-blue-800 md:text-left">
        Brands
      </h2>
      <div className="w-ful grid  grid-cols-3 place-items-center gap-5 py-5 md:grid-cols-6 md:place-items-start md:py-9">
        {BRANDS_LIST.map((brand, i) => (
          <div key={i}>
            <Image
              src={brand.src}
              alt={brand.label}
              width={100}
              height={100}
              className="size-20 object-contain md:size-32"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
