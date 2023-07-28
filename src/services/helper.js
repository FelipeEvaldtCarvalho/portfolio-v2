import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWindowWidth } from "../features/settings";

export const getBody = () => document.querySelector("body");

export const InitResizeScreenWatcher = () => {
  const dispatch = useDispatch();
  const handleWindowResize = () => dispatch(setWindowWidth());
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return;
};

export const blockBodyScroll = () =>
  getBody().classList.add("mobile-menu-open");

export const unblockBodyScroll = () =>
  getBody().classList.remove("mobile-menu-open");

export const getLangFromStorage = () => {
  let lang = localStorage.getItem("lang");
  if (lang) {
    return lang;
  }
  lang = "pt";
  localStorage.setItem("lang", lang);
  return lang;
};

export const setLangFromStorage = (lang) => {
  localStorage.setItem("lang", lang);
};

export const setInitialLang = (i18n, lang) => {
  i18n.changeLanguage(lang);
};
