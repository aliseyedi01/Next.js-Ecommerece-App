import Container from "@components/utility/Container";
import Image from "next/image";

const CategoriesList = [
  {
    label: "Men",
    src: "/images/categories/men.png",
  },
  {
    label: "Women",
    src: "/images/categories/women.png",
  },
  {
    label: "Health",
    src: "/images/categories/health.jpg",
  },
  {
    label: "Home",
    src: "/images/categories/home.png",
  },
  {
    label: "Sports",
    src: "/images/categories/sport.png",
  },
  {
    label: "Gadget",
    src: "/images/categories/gadget.png",
  },
  {
    label: "Foods",
    src: "/images/categories/foods.png",
  },
  {
    label: "Books",
    src: "/images/categories/book.jpg",
  },
  {
    label: "Toys",
    src: "/images/categories/toy.png",
  },
  {
    label: "Garden",
    src: "/images/categories/garden.png",
  },
  {
    label: "Cars",
    src: "/images/categories/cars.jpg",
  },
  {
    label: "Gaming",
    src: "/images/categories/gaming.png",
  },
];

const Categories = () => {
  return (
    <div className="w-full  py-14">
      <Container>
        <h2 className="section-heading">Categories</h2>
        <div className="mt-7 flex w-full flex-row flex-wrap items-center justify-center gap-4 md:mt-2 md:gap-12  md:py-9">
          {CategoriesList.map((category, i) => (
            <div
              key={i}
              className="relative rounded-lg outline outline-1 outline-offset-2 outline-blue-400 md:outline-2 md:outline-offset-[4px]"
            >
              <Image
                src={category.src}
                alt={category.label}
                width={200}
                height={200}
                className="h-14 w-24 rounded-lg object-cover brightness-50 md:h-36 md:w-56"
              />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-bold text-primary-foreground md:text-2xl">
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
