import { ThemeVariant, UnresolvedThemeObject } from "./../../types";

export type ThemeProviderProps = {
    /** 
     * Indicates the theme is a json string. JSON can be used to export the design
     * tokens from an application like Figma or Sketch.
     */
    fromJSON?: boolean;
    /** The theme object to pass to styled-components */
    theme: UnresolvedThemeObject;
    /**
     * Theme variants are used to define the variations of your theme such as `dark` or `light`.
     * They are defined as key value pairs with the current variant value. So, if the current 
     * `mode` of your application is `dark` then your theme variants would be `{ mode: "dark" }`.
     */
    variants?: ThemeVariant;
};