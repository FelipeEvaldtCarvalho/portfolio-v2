import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import "./FcSkills.scss";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ScssIcon,
  GithubIcon,
  VueIcon,
  ReactIcon,
  FigmaIcon,
} from "../FcIcons/FcIcons";

export const FcSkills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills" id="skills">
      <FcTypography tag="h2" fontWeight={600}>
        <span className="title-section">{t("skills.title")}</span>
      </FcTypography>
      <div className="skills__icons">
        <HtmlIcon></HtmlIcon>
        <CssIcon></CssIcon>
        <JsIcon></JsIcon>
        <ScssIcon></ScssIcon>
        <GithubIcon></GithubIcon>
        <VueIcon></VueIcon>
        <ReactIcon></ReactIcon>
        <FigmaIcon></FigmaIcon>
      </div>
    </section>
  );
};
