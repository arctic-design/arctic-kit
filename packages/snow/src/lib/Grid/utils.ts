export const breakpoints = {
  xs: 0,
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280,
  xxl: 1400,
};

export const mq = (key: keyof typeof breakpoints) =>
  `@media only screen and (min-width: ${breakpoints[key]}px)`;
