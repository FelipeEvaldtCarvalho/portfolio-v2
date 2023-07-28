import "./FcTypography.scss";

export const FcTypography = ({
  children,
  tag,
  fontSize,
  fontWeight,
  className = "",
  href,
}) => {
  const CustomTag = `${tag || "p"}`;
  const style = {
    fontSize,
    fontWeight,
  };
  return (
    <CustomTag className={`typography ${className}`} style={style} href={href}>
      {children}
    </CustomTag>
  );
};
