import "./FcContactMe.scss";
import { FcInput } from "../FcInput/FcInput";
import { FcTypography } from "../FcTypography/FcTypography";
import { useTranslation } from "react-i18next";
import { links } from "../../services/links";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("");

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields },
  } = useForm();

  const onSubmit = () => {
    try {
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setSnackMsg(t("contactMe.msgSuccess"));
      setSnackSeverity("success");
      reset();
    } catch (error) {
      setSnackMsg(t("contactMe.msgFail"));
      setSnackSeverity("error");
    } finally {
      setOpen(true);
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <FcInput
        label={t("contactMe.namePlaceholder")}
        name="name"
        error={!!errors.name}
        register={{
          ...register("name", {
            required: "validations.required",
            maxLength: { value: 30, message: ["validations.max", 30] },
          }),
        }}
        helperText={
          errors?.name?.type === "maxLength"
            ? `${t(errors.name.message[0])} ${errors.name.message[1]}`
            : errors?.name?.type === "required"
            ? `${t(errors.name.message)}`
            : ""
        }
      />
      <FcInput
        label={t("contactMe.emailPlaceholder")}
        type="email"
        name="email"
        error={!!errors.email}
        register={{
          ...register("email", {
            required: "validations.required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "validations.email",
            },
          }),
        }}
        helperText={
          errors?.email?.type === "pattern"
            ? `${t(errors.email.message)}`
            : errors?.name?.type === "required"
            ? `${t(errors.email.message)}`
            : ""
        }
      />
      <FcInput
        label={t("contactMe.msgPlaceholder")}
        name="message"
        error={!!errors.msg}
        register={{
          ...register("msg", {
            required: "validations.required",
            maxLength: { value: 300, message: ["validations.max", 300] },
          }),
        }}
        helperText={
          errors?.msg?.type === "maxLength"
            ? `${t(errors.msg.message[0])} ${errors.msg.message[1]}`
            : errors?.msg?.type === "required"
            ? `${t(errors.msg.message)}`
            : ""
        }
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
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={snackSeverity || "success"} sx={{ width: "100%" }}>
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
