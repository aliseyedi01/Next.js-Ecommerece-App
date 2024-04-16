"use client";

import { Button } from "@components/ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui";
import { ChevronRight, CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function BreadcrumbProduct() {
  const router = useRouter();

  const backRoute = () => {
    router.back();
  };
  return (
    <div className="flex h-9 w-full items-center justify-start gap-3  px-3  md:px-32">
      <Button variant="ghost" size="icon" onClick={backRoute}>
        <CircleArrowLeft className=" size-6  text-blue-900 dark:text-blue-400 md:size-8" />
      </Button>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link
                href="/products"
                className="hover:text-black dark:hover:text-white"
              >
                Products
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products/women">Women</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
