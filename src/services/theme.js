export const html = () => document.querySelector("html");

export const getThemeFromStorage = () => {
  let theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  }
  theme = "dark";
  localStorage.setItem("theme", theme);
  return theme;
};

export const setThemeFromStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

export const setInitialTheme = () => {
  html().setAttribute("data-theme", getThemeFromStorage());
};

export const atualTheme = () => html().dataset.theme;

export const getNeutralGray = () =>
  atualTheme() === "dark" ? "#494949" : "#e0e0e0";

export const getBgColor = () =>
  atualTheme() === "dark" ? "#212121" : "#f3f3f3";

export const getFontColor = () =>
  atualTheme() === "dark" ? "#f3f3f3" : "#212121";

export const getFormGreen = () =>
  atualTheme() === "dark" ? "#4cd7a9" : "#42a786";

export const changeTheme = () => {
  const newTheme = atualTheme() === "dark" ? "light" : "dark";
  html().setAttribute("data-theme", newTheme);
  setThemeFromStorage(newTheme);
};
