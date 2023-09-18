import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import "./FcProjects.scss";
import { projects, checkSelectedProject } from "../../services/projects";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const FcProjects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const { t } = useTranslation();
  const projectsSelectors = projects.map((project, index) => (
    <button
      className={`link-btn projects__content__nav__selector${
        checkSelectedProject(selectedProject, index) ? "--selected" : ""
      }`}
      key={`selector-${index}-${project.title}`}
      onClick={() =>
        checkSelectedProject(selectedProject, index)
          ? false
          : setSelectedProject(index)
      }
    >
      {t(`${project.title}`)}
    </button>
  ));
  const handleNext = () => {
    const nextIndex =
      selectedProject === projects.length - 1 ? 0 : selectedProject + 1;
    setSelectedProject(nextIndex);
  };

  const handlePrevius = () => {
    const previusIndex =
      selectedProject === 0 ? projects.length - 1 : selectedProject - 1;
    setSelectedProject(previusIndex);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevius(),
  });
  const projectsCarousel = (
    <div className="projects__content__main__carousel" {...handlers}>
      {projects.map((item, index) => (
        <video
          key={index}
          className={`projects__content__main__carousel__video mobile ${
            checkSelectedProject(selectedProject, index) ? "active" : ""
          }`}
          muted
          autoPlay
          loop
        >
          <source key={index} src={item.mobileVideo} />
        </video>
      ))}
      {projects.map((item, index) => (
        <video
          key={index}
          className={`projects__content__main__carousel__video desktop ${
            checkSelectedProject(selectedProject, index) ? "active" : ""
          }`}
          muted
          autoPlay
          loop
        >
          <source key={index} src={item.desktopVideo} />
        </video>
      ))}
    </div>
  );

  return (
    <section className="projects" id="projects">
      <FcTypography tag="h2" fontWeight={600}>
        <span className="title-section">{t("projects.title")}</span>
      </FcTypography>
      <div className="projects__content">
        <div className="projects__content__main">
          {projectsCarousel}
          <div className="projects__content__main__text">
            <h2>{t(`${projects[selectedProject].title}`)}</h2>
            <p>{t(`${projects[selectedProject].description}`)}</p>
            <div className="projects__content__main__text__icons">
              {projects[selectedProject].links.map((link, index) => {
                return (
                  <a
                    rel="noreferrer"
                    key={`icon-${index}`}
                    target="_blank"
                    href={link.url}
                  >
                    <ion-icon name={link.icon}></ion-icon>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <nav className="projects__content__nav">
          <button
            className="projects__content__nav__btn"
            onClick={handlePrevius}
          >
            <ion-icon name="chevron-back"></ion-icon>
          </button>
          {projectsSelectors}
          <button className="projects__content__nav__btn" onClick={handleNext}>
            <ion-icon name="chevron-forward"></ion-icon>
          </button>
        </nav>

        <a
          href="https://github.com/FelipeEvaldtCarvalho?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="projects__content__link"
        >
          <ion-icon name="logo-github"></ion-icon>
          {t("projects.git")}
        </a>
      </div>
    </section>
  );
};
