const primaryFont = 'Prompt';
const displayFont = 'Lobster';

export const fonts = {
  sansSerif: `${primaryFont}, Avenir, Helvetica, Arial, sans-serif`,
  display: `${displayFont}, Avenir, Helvetica, Arial, sans-serif`
};

const gradientStart = "#8a2387";
const gradientMiddle = "#e94057";
const gradientEnd = "#f27121";

export const colors = {
  white: '#fdfdfd',
  black: '#21252b',
  greyBlue: '#2c3139',
  gradient: {
    start: gradientStart,
    middle: gradientMiddle,
    end: gradientEnd,
    header: `linear-gradient(45deg, ${gradientStart}, ${gradientMiddle}, ${gradientEnd})`,
    footer: `linear-gradient(225deg, ${gradientStart}, ${gradientMiddle}, ${gradientEnd})`
  }
};

export const sizes = {
  xlarge: 1400,
  large: 1280,
  medium: 1024,
  small: 840,
  xsmall: 640
};
