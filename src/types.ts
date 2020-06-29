export type ThemeVariant = Record<string, string>;

/**
 * A Theme Token is a function that will be resolved to the current variant
 * value whenever the theme is created at runtime.
 */
export type ThemeToken<T = string> = (variants: ThemeVariant) => T;

/** Infers the return type of a function `T`. */
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

/**
 * Converts the typescript defintion of a theme to the resolved theme object.
 */
export type ConvertToThemeObject<O extends object> = {
  [K in keyof O]: O[K] extends Function ? ReturnType<O[K]> : O[K] extends object ? ConvertToThemeObject<O[K]> : O[K]
};