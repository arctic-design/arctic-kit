import * as React from 'react';
import { SnowFeedbackColor } from '../types';

export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * type MyType = {
 *      a: string
 *      b: never
 * }
 *
 * OmitNever<MyType> --> { a: string }
 */
type OmitNever<T> = Pick<
  T,
  {
    [Prop in keyof T]: [T[Prop]] extends [never] ? never : Prop;
  }[keyof T]
>;

type Override<T, U> = Omit<T, keyof U> & U;

type MarkInvalidVariantAsNever<T> = {
  [Key in keyof T]: T[Key] extends true
    ? T[Key]
    : T[Key] extends Record<string, unknown>
    ? T[Key]
    : never;
};

type GetWhitelistedVariants<V extends string, U> = OmitNever<
  MarkInvalidVariantAsNever<Override<Record<V, true>, U>>
>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface VariantOverrides {}

type VariantMap = GetWhitelistedVariants<SnowFeedbackColor, VariantOverrides>;

export type VariantType = keyof VariantMap;

export type SnackbarKey = string | number;
export type CloseReason = 'timeout' | 'maxsnack' | 'instructed';

export type SnackbarMessage = string | React.ReactNode;
export type SnackbarAction =
  | React.ReactNode
  | ((key: SnackbarKey) => React.ReactNode);
export type SnackbarContentCallback =
  | React.ReactNode
  | ((key: SnackbarKey, message?: SnackbarMessage) => React.ReactNode);

export interface SnackbarOrigin {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface SharedProps<V extends VariantType = VariantType> {
  anchorOrigin?: SnackbarOrigin;
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. By default snackbars get closed after 5000 milliseconds.
   * Set autoHideDuration to 'null' if you don't want snackbars to automatically close.
   * Alternatively pass `persist: true` in the options parameter of enqueueSnackbar.
   * @default 5000
   */
  autoHideDuration?: number | null;

  /**
   * Used to easily display different variant of snackbars. When passed to `SnackbarProvider`
   * all snackbars inherit the `variant`, unless you override it in `enqueueSnackbar` options.
   * @default default
   */
  variant?: V;

  /**
   * Callback used for getting action(s). actions are mostly buttons displayed in Snackbar.
   * @param {string|number} key key of a snackbar
   */
  action?: SnackbarAction;
  /**
   * Hides iconVariant if set to `true`.
   * @default false
   */
  hideIconVariant?: boolean;
  /**
   * Properties applied to the Snackbar root element. You'd only want to use
   * this prop to apply html attributes for accessibility or data-* attributes.
   */
  SnackbarProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Replace the snackbar. Callback used for displaying entirely customized snackbars.
   * @param {string|number} key key of a snackbar
   *
   * @ignore
   * @deprecated - Will be removed in future releases. You should use `Components` prop of
   * `SnackbarProvider` to display a custom snackbar. This is to have more control over
   * custom snackbars.
   */
  content?: SnackbarContentCallback;
  /**
   * Callback fired before snackbar requests to get closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"maxsnack"`
   * (snackbar was closed because `maxSnack` has reached) or: `"instructed"` (snackbar was
   * closed programmatically)
   * @param {string|number|undefined} key key of a Snackbar. key will be `undefined` if closeSnackbar
   * is called with no key (user requested all the snackbars to be closed)
   */
  onClose?: (key?: SnackbarKey) => void;
}

export interface OptionsObject<V extends VariantType = VariantType>
  extends SharedProps<V> {
  /**
   * Unique identifier to reference a snackbar.
   * @default string random unique string
   */
  key?: SnackbarKey;
  /**
   * Snackbar stays on the screen, unless it is dismissed (programmatically or through user interaction).
   * @default false
   */
  persist?: boolean;
}

type NeededByInternalSnack = 'persist' | 'variant' | 'anchorOrigin';

export interface InternalSnack
  extends RequiredBy<
    Omit<OptionsObject, 'key' | 'preventDuplicate'>,
    NeededByInternalSnack
  > {
  id: SnackbarKey;
  message?: SnackbarMessage;
  iconVariant?: Record<string, React.ReactNode>;
}

export type SnackbarContextProps = {
  snacks: InternalSnack[];
  enqueueSnackbar: (
    messageOrOptions:
      | SnackbarMessage
      | (OptionsObject & { message?: SnackbarMessage })
  ) => SnackbarKey;
  closeSnackbar: (key?: SnackbarKey) => void;
};
