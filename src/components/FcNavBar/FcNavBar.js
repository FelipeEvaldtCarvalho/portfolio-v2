import FcLogo from "../FcLogo/FcLogo";
import { FcTypography } from "../FcTypography/FcTypography";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, toggleLang } from "../../features/settings";
import "./FcNavBar.scss";
import { changeTheme } from "../../services/theme";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {
  blockBodyScroll,
  unblockBodyScroll,
  setLangFromStorage,
} from "../../services/helper";

export const FcNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(window.scrollY);
  const [hideNav, setHideNav] = useState(false);
  const { t, i18n } = useTranslation();
  const theme = useSelector((state) => state.settings.theme);
  const lang = useSelector((state) => state.settings.lang);
  const windowWidth = useSelector((state) => state.settings.windowWidth);
  const dispatch = useDispatch();
  const ThemeIcon = ({ height }) =>
    theme === "dark" ? (
      <ion-icon
        style={{ fontSize: height || "initial" }}
        name="sunny"
      ></ion-icon>
    ) : (
      <ion-icon
        style={{ fontSize: height || "initial" }}
        name="moon"
      ></ion-icon>
    );

  const toggleLanguage = () => (lang === "pt" ? "en" : "pt");
  const changeLanguage = () => {
    dispatch(toggleLang());
    i18n.changeLanguage(toggleLanguage());
    setLangFromStorage(toggleLanguage());
  };
  const handleChangeTheme = () => {
    dispatch(toggleTheme());
    changeTheme();
  };
  const openMobileMenu = () => {
    setMenuOpen(true);
    blockBodyScroll();
  };
  const closeMobileMenu = () => {
    setMenuOpen(false);
    unblockBodyScroll();
  };
  const navLinks = [
    { text: "navBar.about", link: "#about" },
    {
      text: "navBar.skills",
      link: "#skills",
    },
    {
      text: "navBar.projects",
      link: "#projects",
    },
    {
      text: "navBar.experiences",
      link: "#experiences",
    },
    {
      text: "navBar.contactMe",
      link: "#contact",
    },
  ];
  const renderNavLinks = navLinks.map((link, index) => (
    <a
      key={index}
      style={{ fontWeight: 500, fontSize: 18 }}
      href={link.link}
      className="nav-options-links-list__links"
      onClick={closeMobileMenu}
    >
      {t(link.text)}
    </a>
  ));
  useEffect(() => {
    if (windowWidth > 768) {
      closeMobileMenu();
    }
  }, [windowWidth]);

  const handleScroll = () => {
    setHideNav(window.scrollY > lastScrollPos);
    setLastScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav
      className={`nav ${hideNav ? "hide" : ""}`}
      onLoad={() => i18n.changeLanguage(lang)}
    >
      <FcLogo height={30} width={77} />
      <div className="nav-options">
        <div className={`nav-options-links ${menuOpen ? "menu-open" : ""}`}>
          <button onClick={closeMobileMenu} className="close-btn">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
          <div className="nav-options-links-list">{renderNavLinks}</div>
        </div>
        <div className="d-flex gap-5 justify-content-end">
          <button
            className="link-btn nav-options__lang-btn"
            onClick={changeLanguage}
          >
            <FcTypography weight={500} size={18}>
              {t("lang")}
            </FcTypography>
          </button>
          <button className="link-btn" onClick={handleChangeTheme}>
            <ThemeIcon height={30} />
          </button>
        </div>
      </div>
      <button onClick={openMobileMenu} className="mobile-btn link-btn">
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
    </nav>
  );
};
