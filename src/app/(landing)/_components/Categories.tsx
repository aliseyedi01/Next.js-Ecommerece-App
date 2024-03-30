import Container from "@components/utility/Container";
import { CategoriesList } from "@data/categories-data";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="w-full  py-14">
      <Container>
        <h2 className="section-heading">Categories</h2>
        <div className="mt-7 flex w-full flex-row flex-wrap items-center justify-center gap-4 md:mt-2 md:gap-12  md:py-9">
          {CategoriesList.map((category, i) => (
            <div
              key={i}
              className="relative rounded-lg outline outline-1 outline-offset-2 outline-blue-400 dark:outline-blue-300  md:outline-2 md:outline-offset-[4px]"
            >
              <Image
                src={category.src}
                alt={category.label}
                width={200}
                height={200}
                className="h-14 w-24 rounded-lg object-cover brightness-50 dark:brightness-[0.65]  md:h-36 md:w-56"
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-bold text-blue-200  md:text-2xl">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
