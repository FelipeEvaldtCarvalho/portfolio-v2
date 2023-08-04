import FcLogo from "../FcLogo/FcLogo";
import { FcTypography } from "../FcTypography/FcTypography";
import "./FcFooter.scss";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

export const FcFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <FcLogo height={30} width={77} />
      <FcTypography>{parse(t("footer.text"))}</FcTypography>
    </footer>
  );
};
