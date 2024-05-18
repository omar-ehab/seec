import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDir(lang: LangType) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
