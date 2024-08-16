// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  blue,
  green,
  red,
  yellow,
  grey,
  neutral,
  violet,
  aurora,
} from '../../../colors/src';
// Using a relative path for import in theme.ts due to @pigment-css/react being unable to resolve the @arctic-kit/colors package in vite.config.ts.
// All other files correctly use @arctic-kit/colors.

export { blue, green, red, yellow, grey, neutral, violet, aurora };
