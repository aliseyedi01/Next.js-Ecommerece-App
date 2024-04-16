import React from "react";

export default function DetailsProduct() {
  return (
    <div className="text-lg leading-8">
      <p className="pb-4 text-base font-medium md:text-lg  md:font-semibold">
        Description
      </p>
      <p className="pl-4 text-base md:text-lg">
        THis T-Shirt is not just another tee; it is a statement piece crafted
        for comfort, style, and versatility. <br />
        This meticulously designed t-shirt promises to become a cornerstone of
        your casual wardrobe, <br /> seamlessly transitioning from day to night
        and effortlessly adapting to your unique sense of style.
      </p>
      <p className="py-4 text-base font-medium md:text-lg  md:font-semibold">
        Property
      </p>
      <ul className="list-disc pl-7 text-base md:text-lg">
        <li>60% cotton, 40% linen</li>
        <li>Fabric weight: 310 g/m2</li>
        <li>Woven in Spain</li>
        <li>
          The jacket is dyed finished by immersion in carefully combined pigment
          baths. Relaxed fit
        </li>
      </ul>
      <p className="py-4 text-base font-medium md:text-lg  md:font-semibold">
        Additional Information
      </p>
      <p className="pl-4 text-base md:text-lg">
        This T-shirt is part of our sustainable collection, made from organic
        cotton sourced from local farms practicing eco-friendly farming methods.
        With every purchase, you contribute to our mission of supporting
        sustainable fashion and reducing environmental impact.
      </p>
    </div>
  );
}
