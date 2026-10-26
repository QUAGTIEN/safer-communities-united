// Adapted from shadcn/ui new-york-v4 Button (Radix), MIT.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-[3px] border border-transparent px-5 py-3 text-sm leading-snug font-semibold text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-burgundy text-white hover:underline underline-offset-4",
        outline: "border-burgundy bg-transparent text-burgundy hover:underline underline-offset-4",
        link: "min-h-0 justify-start rounded-none border-0 bg-transparent p-0 text-burgundy underline-offset-4 hover:underline",
      },
      size: { default: "", sm: "px-4 py-2", lg: "px-7 py-4 text-base", icon: "size-11 p-0" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({ className, variant, size, asChild = false, type, ...props }:
  React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp data-slot="button" type={asChild ? undefined : (type ?? "button")}
    className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
