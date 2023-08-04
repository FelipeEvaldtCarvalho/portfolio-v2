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
      top: 3,
      color: getFontColor(),
      fontSize: "20px",
      paddingLeft: "16px",
      zIndex: 2,
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

export const FcInput = ({ label, type, error, model, value }) => {
  const theme = useSelector((state) => state.settings.theme);

  const handleChange = (e) => (model ? model(e) : false);

  return (
    <StyledFcInput
      onChange={handleChange}
      value={value}
      autoComplete="off"
      key={theme}
      label={label || "label"}
      variant="standard"
      inputProps={{ inputMode: type || "text" }}
      error={error}
    />
  );
};
