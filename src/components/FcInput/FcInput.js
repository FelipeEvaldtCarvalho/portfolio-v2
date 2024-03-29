import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import {
  getNeutralGray,
  getFontColor,
  getFormGreen,
} from "../../services/theme";
import { useSelector } from "react-redux";

import "./FcInput";

const StyledFcInput = styled(TextField)(() => {
  return {
    "& .MuiFormLabel-root": {
      top: 1,
      color: getFontColor(),
      fontSize: "20px",
      paddingLeft: "16px",
      zIndex: 1,
      '&[data-shrink="true"]': {
        padding: 0,
        color: getFormGreen(),
        top: -7,
      },

      "&.Mui-focused": {
        padding: 0,
        color: getFormGreen(),
        top: -7,
      },
    },

    "& .MuiInputBase-root": {
      fontSize: "20px",
      "&::after": {
        borderBottom: `2px solid ${getFormGreen()}`,
      },
      input: {
        padding: "5px 0 5px 16px",
        backgroundColor: getNeutralGray(),
        color: getFontColor(),
      },
    },
  };
});

export const FcInput = ({
  label,
  type,
  error,
  model,
  value,
  name,
  helperText,
  register,
}) => {
  const theme = useSelector((state) => state.settings.theme);

  const handleChange = (e) => (model ? model(e) : false);

  return (
    <StyledFcInput
      name={name}
      onChange={handleChange}
      value={value}
      autoComplete="off"
      key={theme}
      label={label || "label"}
      variant="standard"
      inputProps={{ inputMode: type || "text" }}
      error={error}
      helperText={helperText}
      {...register}
    />
  );
};
