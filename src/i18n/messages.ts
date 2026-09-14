type Messages = Record<string, unknown>;

function deepMerge(base: Messages, overrides: Messages): Messages {
  const result: Messages = { ...base };
  for (const key of Object.keys(base)) {
    const baseValue = base[key];
    const overrideValue = overrides?.[key];
    if (
      typeof baseValue === "object" &&
      baseValue !== null &&
      !Array.isArray(baseValue) &&
      typeof overrideValue === "object" &&
      overrideValue !== null &&
      !Array.isArray(overrideValue)
    ) {
      result[key] = deepMerge(baseValue as Messages, overrideValue as Messages);
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  for (const key of Object.keys(overrides ?? {})) {
    if (!(key in base)) {
      result[key] = overrides[key];
    }
  }
  return result;
}

function collectMissingKeys(
  base: Messages,
  overrides: Messages,
  prefix = ""
): string[] {
  const missing: string[] = [];
  for (const key of Object.keys(base)) {
    const path = prefix ? `${prefix}.${key}` : key;
    const baseValue = base[key];
    const overrideValue = overrides ? overrides[key] : undefined;

    if (typeof baseValue === "object" && baseValue !== null && !Array.isArray(baseValue)) {
      missing.push(
        ...collectMissingKeys(baseValue as Messages, (overrideValue as Messages) ?? {}, path)
      );
    } else if (overrideValue === undefined) {
      missing.push(path);
    }
  }
  return missing;
}

export function mergeWithFallback(
  baseMessages: Messages,
  localeMessages: Messages,
  locale: string
): Messages {
  if (locale === "en") return baseMessages;

  if (process.env.NODE_ENV === "development") {
    const missing = collectMissingKeys(baseMessages, localeMessages);
    if (missing.length > 0) {
      console.warn(
        `[i18n] Locale "${locale}" is missing ${missing.length} key(s), falling back to English: ${missing.join(", ")}`
      );
    }
  }

  return deepMerge(baseMessages, localeMessages);
}
