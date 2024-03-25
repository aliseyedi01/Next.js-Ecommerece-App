import Container from "@components/utility/Container";
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
      <Container>
        <h2 className="section-heading">Brands</h2>
        <div className="grid grid-cols-3 place-items-center gap-8  px-4 py-5 md:grid-cols-6 md:px-24  md:py-9">
          {BRANDS_LIST.map((brand, i) => (
            <div key={i}>
              <Image
                src={brand.src}
                alt={brand.label}
                width={100}
                height={100}
                className="size-16 object-contain md:size-28"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
