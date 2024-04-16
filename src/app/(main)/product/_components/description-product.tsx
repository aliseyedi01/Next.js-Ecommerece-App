import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui";
import React from "react";

import DetailsProduct from "./details-product";
import QuestionsProduct from "./questions-product";
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
          <DetailsProduct />
        </TabsContent>
        {/* Reviews */}
        <TabsContent value="reviews">
          <ReviewsProduct />
        </TabsContent>
        {/* Question */}
        <TabsContent value="questions">
          <QuestionsProduct />
        </TabsContent>
      </Tabs>
    </div>
  );
}
