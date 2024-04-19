import { cn } from "@lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconOutline?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconOutline, ...props }, ref) => {
    return (
      <div className="relative">
        {/* Add a relative container */}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sky-300/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ",
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute left-2 top-[7px] transform text-background ">
            {/* {icon} */}
            {React.cloneElement(icon as React.ReactElement, {
              className: "fill-blue-400 stroke-2",
            })}
          </span>
        )}
        {iconOutline && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2 transform text-background ">
            {/* {icon} */}
            {React.cloneElement(iconOutline as React.ReactElement, {
              className: "size-5 text-blue-800 dark:text-blue-500 mt-[1px]",
            })}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
