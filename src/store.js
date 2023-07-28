import { configureStore } from "@reduxjs/toolkit";
import settings from "./features/settings";

export default configureStore({
  reducer: { settings },
});
