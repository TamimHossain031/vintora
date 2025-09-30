"use client";

import { AppProvider } from "../../../contexts/AppContext";

export const AppProviders = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};
