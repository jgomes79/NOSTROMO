import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useSettings } from "@/core/settings/hooks/useSettings";

/**
 * Props for the I18nProvider component.
 */
interface I18nProviderProps {
  readonly children: React.ReactNode;
}

/**
 * I18nProvider component to manage internationalization.
 * @param {I18nProviderProps} props - The props for the I18nProvider component.
 * @returns {React.ReactNode} The children components wrapped with I18nProvider.
 */
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const { language } = useSettings();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return children;
};
