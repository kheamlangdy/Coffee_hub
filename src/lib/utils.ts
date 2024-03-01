import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function lastChar(str: string) {
    if (str === "") return "";
    return str.charAt(str.length - 1);
}
