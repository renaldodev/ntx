import { useTranslation as useTranslationFunc } from "react-i18next";

export function useTranslation() {
  const { t, i18n } = useTranslationFunc();
  const changeLanguage = (language: string) => i18n.changeLanguage(language);
  const language = i18n.resolvedLanguage;
  return { translate: t, changeLanguage, language };
}
