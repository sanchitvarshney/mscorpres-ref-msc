import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { mergeWithFallback } from "./messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const englishMessages = (await import("../../messages/en.json")).default;
  const localeMessages =
    locale === "en"
      ? englishMessages
      : (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: mergeWithFallback(englishMessages, localeMessages, locale),
    onError(error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[i18n]", error.message);
      }
    },
    getMessageFallback({ namespace, key }) {
      return namespace ? `${namespace}.${key}` : key;
    },
  };
});
