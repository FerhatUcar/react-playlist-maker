import { ChangeEvent } from "react";

export const PRIMARY_COLOR = "#323232";
export const SECONDARY_COLOR = "#ffe000";
export const RED_COLOR = "#ea3100";
export const RED_DARK_COLOR = "#bb2500";
export const BACKGROUND_COLOR = "#262626";

export const GUTTER = "1rem";
export const GUTTER_XL = "2rem";
export const GUTTER_XXL = "6rem";

export const BOX_SHADOW = "0 3px 5px rgba(0, 0, 0, 0.5)";
export const BOX_SHADOW_XL = "0 15px 40px rgba(0, 0, 0, 0.5)";
export const TRANSITION = "all .2s ease-in-out";

// types
export type EventGenericType = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
export type EventInputType = ChangeEvent<HTMLInputElement>;
