import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleClick() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};