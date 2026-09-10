import "server-only";

const dictionaries = {
  id: () => import("@/dictionaries/id.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];
export const defaultLocale: Locale = "id";

export const getDictionary = async (locale: Locale) => {
  // Jika locale tidak dikenali, default ke bahasa Indonesia
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries["id"]();
};
