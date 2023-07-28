import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import "./FcExperiences.scss";
import { experiences } from "../../services/experiences";

export const FcExperiences = () => {
  const { t } = useTranslation();

  const ExperienceView = ({ experience }) => (
    <div className="experiences__container__lists">
      <FcTypography className="lists__title">
        {t(experience.title)}
      </FcTypography>
      <div className="lists__techs d-flex">
        {experience.techs.map((tech, index) => (
          <FcTypography>
            <span className="lists__techs__tech" key={index}>
              {tech}
            </span>
          </FcTypography>
        ))}
      </div>
      <FcTypography className="lists__description">
        {t(experience.description)}
      </FcTypography>
    </div>
  );
  const ExperiencesView = () => (
    <>
      {experiences.map((experience, index) => (
        <ExperienceView key={index} experience={experience} />
      ))}
    </>
  );
  return (
    <section className="experiences">
      <FcTypography tag="h2" fontWeight={600}>
        <span className="title-section">{t("experiences.title")}</span>
      </FcTypography>
      <div className="experiences__content d-flex">
        <FcTypography tag="h2" fontWeight={600}>
          {t("experiences.appmax.name")}
        </FcTypography>
        <div className="experiences__container d-flex flex-column">
          <ExperiencesView />
        </div>
      </div>
    </section>
  );
};
