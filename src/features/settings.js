import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromStorage } from "../services/theme";
import { getLangFromStorage } from "../services/helper";

export const settings = createSlice({
  name: "settings",
  initialState: {
    theme: getThemeFromStorage(),
    lang: getLangFromStorage(),
    windowWidth: window.innerWidth,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    toggleLang: (state) => {
      state.lang = state.lang === "pt" ? "en" : "pt";
    },
    setWindowWidth: (state) => {
      state.windowWidth = window.innerWidth;
    },
  },
});

export const { toggleTheme, toggleLang, setWindowWidth } = settings.actions;

export default settings.reducer;
