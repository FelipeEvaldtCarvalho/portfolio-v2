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

export const changeTheme = () => {
  const newTheme = atualTheme() === "dark" ? "light" : "dark";
  html().setAttribute("data-theme", newTheme);
  setThemeFromStorage(newTheme);
};
