import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui";
import React from "react";

import ReviewsProduct from "./reviews-product";

export default function DescriptionProduct() {
  return (
    <div className="h-full w-full px-3  md:px-20">
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blue-100">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>
        {/* Details */}
        <TabsContent value="details">
          <div className="text-lg leading-8">
            THis T-Shirt is not just another tee; it is a statement piece
            crafted for comfort, style, and versatility. <br />
            This meticulously designed t-shirt promises to become a cornerstone
            of your casual wardrobe, <br /> seamlessly transitioning from day to
            night and effortlessly adapting to your unique sense of style.
          </div>
        </TabsContent>
        {/* Reviews */}
        <TabsContent value="reviews">
          <ReviewsProduct />
        </TabsContent>
        {/* Question */}
        <TabsContent value="questions">
          <div className="">questions</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
