"use client";

import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui";
import { usePathname } from "next/navigation";
import React from "react";

export function BreadcrumbProfile() {
  const pathname = usePathname();

  // Split the pathname into segments
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Generate breadcrumb items dynamically
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return (
      <BreadcrumbItem key={segment}>
        <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            {item}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
