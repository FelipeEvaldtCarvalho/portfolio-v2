import "./FcContactMe.scss";
import { FcInput } from "../FcInput/FcInput";
import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import { links } from "../../services/links";
import { useState } from "react";
import { required, max, email as emailV } from "../../services/validations";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [changes, setChanges] = useState(0);

  const handleInputNameChange = (e) => {
    setName(e.target.value);
    setChanges(changes + 1);
  };

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
    setChanges(changes + 1);
  };

  const handleInputMsgChange = (e) => {
    setMsg(e.target.value);
    setChanges(changes + 1);
  };

  // const formValidation = () => {
  //   setChanges(changes + 1);
  //   return nameValidation() && emailValidation() && msgValidation();
  // };

  const nameValidation = () => {
    return (required(name) && max(name, 50)) || !changes;
  };

  const emailValidation = () => {
    return (required(email) && emailV(email)) || !changes;
  };

  const msgValidation = () => {
    return (required(msg) && max(msg, 300)) || !changes;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMsg("");
    setChanges(0);
  };

  const onSubmit = (data) => console.log(data);

  const { t } = useTranslation();
  return (
    <form className="contact-form d-flex flex-column gap-4" onSubmit={onSubmit}>
      <FcInput
        label={t("contactMe.namePlaceholder")}
        value={name}
        model={handleInputNameChange}
        error={!nameValidation()}
      />
      <FcInput
        label={t("contactMe.emailPlaceholder")}
        type="email"
        value={email}
        model={handleInputEmailChange}
        error={!emailValidation()}
      />
      <FcInput
        label={t("contactMe.msgPlaceholder")}
        value={msg}
        model={handleInputMsgChange}
        error={!msgValidation()}
      />
      <input
        className="contact-form__btn"
        type="submit"
        value={t("contactMe.send")}
      />
      <input
        className="contact-form__btn gray"
        type="reset"
        value={t("contactMe.clean")}
        onClick={clearForm}
      />
    </form>
  );
};

export const FcContactMe = () => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <FcTypography tag="h2" fontWeight={600}>
        <span className="title-section">{t("contactMe.title")}</span>
      </FcTypography>

      <div className="content d-flex">
        <div className="content__text d-flex flex-column">
          <FcTypography fontWeight={400}>
            {t("contactMe.description")}
          </FcTypography>
          <span className="social d-flex w-100 justify-content-center gap-5">
            <a href={links.linkedIn} target="_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href={links.whatsApp} target="_blank" rel="noreferrer">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </span>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
