import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 hover:border-gray-400 dark:hover:border-gray-500 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400",
        error:
          "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400 placeholder:text-red-300 dark:placeholder:text-red-400 focus-visible:ring-red-500 dark:focus-visible:ring-red-400",
      },
      size: {
        default: "h-10",
        sm: "h-9 text-sm",
        lg: "h-11 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
