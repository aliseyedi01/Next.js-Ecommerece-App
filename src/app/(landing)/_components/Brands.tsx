import Container from "@components/utility/Container";
import { BrandsData } from "@data/brands-data";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="w-full py-7" id="brands">
      <Container>
        <h2 className="section-heading">Brands</h2>
        <div className="grid grid-cols-3 place-items-center gap-8  px-4 py-5 md:grid-cols-6 md:px-24  md:py-9">
          {BrandsData.map((brand, i) => (
            <div key={i}>
              <Image
                src={brand.src}
                alt={brand.label}
                width={100}
                height={100}
                className="size-16 object-contain md:size-24"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Brands;
