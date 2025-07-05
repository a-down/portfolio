import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param {...any} inputs
 * @returns {string} merged Tailwind CSS classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
