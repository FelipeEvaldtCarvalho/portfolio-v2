import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import "./FcAboutMe.scss";

export const FcAboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <div className="about__text">
        <FcTypography tag="h2" fontWeight={600}>
          <span className="title-section">{t("about.title")}</span>
        </FcTypography>
        <FcTypography className="default-text">
          {t("about.description")}
        </FcTypography>
      </div>
      <div className="about__img">
        <img src="/images/mypic.png" alt="its-me"></img>
      </div>
    </section>
  );
};
