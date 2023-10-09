import { LanguageItem } from "./hooks.tsx";

export const LanguageBoxItem = ({ language }: { language: LanguageItem }) => {
  return (
    <>
      <span className="block">{language.name}</span>
      <progress
        max={4}
        value={language.value}
        className="w-full
        progress-bar:bg-gray-200
        progress-bar:rounded-full
        progress-bar:shadow-inner
        progress-value:rounded-full
        progress-value:bg-black"
      ></progress>
    </>
  );
};
