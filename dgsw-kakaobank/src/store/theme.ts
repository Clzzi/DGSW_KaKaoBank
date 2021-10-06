import { ThemeEnum } from "enum/ThemeEnum";
import { atom } from "recoil";
import { getTheme } from "util/getTheme";

export const themeMode = atom<ThemeEnum>({
  key: "themeMode",
  default: getTheme(),
})