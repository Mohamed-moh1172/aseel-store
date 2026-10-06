import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEgp(amount: number) {
  return `${amount.toLocaleString("en-EG")} ج.م`;
}
