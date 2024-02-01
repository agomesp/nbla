import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    palette: {
      PRIMARY: {
        DARK: string;
        MAIN: string;
        LIGHT: string;
        GREY: string;
      };
      SECONDARY: {
        DARK: string;
        MAIN: string;
        LIGHT: string;
      };
      TERTIARY: {
        DARK: string;
        MAIN: string;
        LIGHT: string;
      };
      GREYSCALE: {
        BLACK: string;
        DARK_GREY: string;
        GREY: string;
        LIGHT_GREY: string;
        LIGHT_ONE: string;
        LIGHT_TWO: string;
        LIGHT_GREY_THREE: string;
        WHITE: string;
      };
      BACKGROUND: {
        MODAL: string;
        PAPER: string;
        DEFAULT: string;
        HINT: string;
        DIVIDER: string;
        SKELETON_IN: string;
        SKELETON_OUT: string;
        TOOLTIP: string;
        PROFILE: string;
        EXPANSIBLE: string;
        ROW_BACKGROUND: string;
        BORDER: string;
        CONTRAST_ONE: string;
        CONTRAST_TWO: string;
      };
      TEXT: {
        PRIMARY: string;
        SECONDARY: string;
        TERTIARY: string;
        DISABLED: string;
        HINT: string;
        HINT_DISABLED: string;
        CONTRAST_ONE: string;
        CONTRAST_TWO: string;
        ROW_TEXT: string;
        TITLE_RESULT: string;
      };
      INPUT: {
        BACKGROUND: string;
        BORDER: string;
        TEXT: string;
        PLACEHOLDER: string;
        COLOR: string;
      };
      BUTTON: {
        BACKGROUND: string;
        BACKGROUND_ERROR: string;
        HOVER: string;
        HOVER_ERROR: string;
        BORDER: string;
        TEXT: string;
        ICON: string;
        SHADOW: string;
        SHADOW_ERROR: string;
        LIGHT: string;
        LIGHT_ERROR: string;
      };
      TABLE: {
        BORDER: string;
        BACKGROUND_HEADER: string;
      };
      SUCCESS: {
        LIGHT: string;
        MAIN: string;
        DARK: string;
      };
      INFO: {
        LIGHT: string;
        MAIN: string;
        DARK: string;
      };
      WARNING: {
        LIGHT: string;
        MAIN: string;
        DARK: string;
      };
      ERROR: {
        LIGHT: string;
        LIGHT_TWO: string;
        MAIN: string;
        MAIN_TWO: string;
        DARK: string;
      };
      LEVEL: {
        LOW: string;
        MEDIUM: string;
        HIGH: string;
        VERY_HIGH: string;
      };
      OTHERS: {
        DARK_GREY: string;
        YELLOW: string;
        PURPLE: string;
        ARROW: string;
        TRANSLUCENT: string;
        CLEAR_GREY: string;
        GREY: string;
        SWEET_GREEN: string;
      };
    };
  }
}
