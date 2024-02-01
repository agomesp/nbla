import { ILanguage } from './types'

export const actionsTypes = {
  SELECT_LANGUAGE: '@language/SELECT_LANGUAGE'
};

const baseSelector = (state: ILanguage) => state;

export const setLanguage = ({ language }: { language: string }) => {
  return { type: actionsTypes.SELECT_LANGUAGE, payload: { language } };
};

export const selectors = {
  selectLanguage: (state: ILanguage): string => baseSelector(state).language
};
