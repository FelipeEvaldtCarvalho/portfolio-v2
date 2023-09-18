import "./FcContactMe.scss";
import { FcInput } from "../FcInput/FcInput";
import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import { links } from "../../services/links";
import { useState, useRef } from "react";
import { required, max, email as emailV } from "../../services/validations";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [changes, setChanges] = useState(0);
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("");

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

  const formValidation = () => {
    if (!changes) {
      setChanges(changes + 1);
    }
    return nameValidation() && emailValidation() && msgValidation();
  };

  const nameValidation = () => {
    console.log(required(name));
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formValidation()) {
      return;
    }
    try {
      // emailjs.sendForm(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      //   form.current,
      //   process.env.REACT_APP_EMAILJS_USER_ID
      // );
      setSnackMsg(t("contactMe.msgSuccess"));
      setSnackSeverity("success");
      return setOpen(true);
    } catch (error) {
      setSnackMsg(t("contactMe.msgSuccess"));
      setSnackSeverity("success");
      return setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();
  return (
    <form
      ref={form}
      className="contact-form d-flex flex-column gap-4"
      onSubmit={onSubmit}
    >
      <FcInput
        label={t("contactMe.namePlaceholder")}
        value={name}
        model={handleInputNameChange}
        error={!nameValidation()}
        name="name"
      />
      {required(name) || !changes ? (
        ""
      ) : (
        <Alert variant="filled" severity="warning">
          {t("validations.required")}
        </Alert>
      )}
      {max(name, 50) || !changes ? (
        ""
      ) : (
        <Alert variant="filled" severity="warning">
          {`${t("validations.max")} 50!`}
        </Alert>
      )}
      <FcInput
        label={t("contactMe.emailPlaceholder")}
        type="email"
        value={email}
        model={handleInputEmailChange}
        error={!emailValidation()}
        name="email"
      />
      {emailV(email) || !changes ? (
        ""
      ) : (
        <Alert variant="filled" severity="warning">
          {t("validations.email")}
        </Alert>
      )}
      {required(email) || !changes ? (
        ""
      ) : (
        <Alert variant="filled" severity="warning">
          {t("validations.required")}
        </Alert>
      )}
      <FcInput
        label={t("contactMe.msgPlaceholder")}
        value={msg}
        model={handleInputMsgChange}
        error={!msgValidation()}
        name="message"
      />
      {required(msg) || !changes ? (
        ""
      ) : (
        <Alert variant="filled" severity="warning">
          {t("validations.required")}
        </Alert>
      )}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={snackSeverity} sx={{ width: "100%" }}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </form>
  );
};

export const FcContactMe = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
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
