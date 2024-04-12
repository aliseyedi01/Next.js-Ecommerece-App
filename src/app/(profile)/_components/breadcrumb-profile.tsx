"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            {item}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
