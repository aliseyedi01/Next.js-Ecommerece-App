import Container from "@components/utility/Container";
import Image from "next/image";

const FEATURES_LIST = [
  {
    label: "Authenticity Guarantee",
    description: "Authenticity guaranteed or your money back.",
    iconSrc: "/images/features/cash-flow.png",
  },
  {
    label: "Hassle-free Exchange",
    description: "Not happy with your purchase? We'll exchange it hassle-free.",
    iconSrc: "/images/features/mask.png",
  },
  {
    label: "Daily New Arrivals",
    description: "Discover new items added daily to our collections.",
    iconSrc: "/images/features/trolley.png",
  },
  {
    label: "Speedy & Free Shipping",
    description:
      "Enjoy speedy delivery at no extra cost for our loyal customers.",
    iconSrc: "/images/features/cargo-truck.png",
  },
];

const Features = () => {
  return (
    <section className="py-14">
      <Container>
        <h2 className=" section-heading">Features</h2>
        <div className="mt-12 grid gap-10 text-primary sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center text-primary"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-blue-100 p-2 dark:bg-blue-200">
                <Image
                  width={64}
                  height={64}
                  src={feature.iconSrc}
                  className="h-6 w-auto max-w-[1.5rem]"
                  alt={feature.label}
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ring">
                {feature.label}
              </h3>
              <p className="mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
