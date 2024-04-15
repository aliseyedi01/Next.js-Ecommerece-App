import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui";
import React from "react";

export default function DescriptionProduct() {
  return (
    <div className="h- w-full px-3  md:px-20">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blue-100">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="">details</div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="">reviews</div>
        </TabsContent>
        <TabsContent value="questions">
          <div className="">questions</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
