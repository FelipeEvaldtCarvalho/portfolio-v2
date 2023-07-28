import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import "./FcMain.scss";
import Typewriter from "typewriter-effect";

export const FcMain = () => {
  const { t } = useTranslation();
  return (
    <section className="main">
      <FcTypography fontWeight={400} tag="h2">
        {t("main.intro")}
      </FcTypography>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(t("main.name")).start();
        }}
      ></Typewriter>
      <FcTypography fontWeight={400} tag="h2">
        {t("main.description")}
      </FcTypography>
      <ion-icon class="next-icon" name="chevron-down-outline"></ion-icon>
    </section>
  );
};
