export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = (key: keyof typeof breakpoints) =>
  `@media only screen and (min-width: ${breakpoints[key]}px)`;
