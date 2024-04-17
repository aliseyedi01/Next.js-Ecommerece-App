import Container from "@components/utility/Container";
import { FeaturesData } from "@data/features-data";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-14">
      <Container>
        <h2 className=" section-heading">Features</h2>
        <div className="mt-12 grid gap-10 text-primary sm:grid-cols-2 lg:grid-cols-4">
          {FeaturesData.map((feature) => (
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
