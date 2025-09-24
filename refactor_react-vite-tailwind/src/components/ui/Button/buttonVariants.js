import { cva } from "class-variance-authority";

const buttonVariants = cva("rounded-full border-0 text-white text-sm font-bold cursor-pointer transition-colors", {
  variants: {
    variant: {
      gradient: "px-6 py-3 bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-400 hover:to-cyan-400",
      outline: "px-6 py-3 border-2 border-lime-500 text-lime-500 hover:bg-lime-50",
      ghost: "px-6 py-3 text-gray-700 hover:bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "gradient",
  },
});

export default buttonVariants;
