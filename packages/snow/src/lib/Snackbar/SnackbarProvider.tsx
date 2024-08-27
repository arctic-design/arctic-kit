'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { PropsWithChildren, isValidElement, useState } from 'react';
import SnackbarContext from './SnackbarContext';
import {
  InternalSnack,
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
} from './types';

import { PortalSnackbarContainer } from './PortalSnackbarContainer';

const defaults = {
  maxSnack: 3,
  persist: false,
  hideIconVariant: false,
  disableWindowBlurListener: false,
  //   variant: 'default',
  autoHideDuration: 50000,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export const isDefined = (value: string | null | undefined | number): boolean =>
  !!value || value === 0;

const isOptions = (
  messageOrOptions:
    | SnackbarMessage
    | (OptionsObject & { message?: SnackbarMessage })
): messageOrOptions is OptionsObject & { message?: SnackbarMessage } => {
  const isMessage =
    typeof messageOrOptions === 'string' || isValidElement(messageOrOptions);
  return !isMessage;
};

export const merge =
  (options: any, props: any) =>
  (name: keyof InternalSnack, shouldObjectMerge = false) => {
    if (shouldObjectMerge) {
      return {
        ...(defaults as any)[name],
        ...props[name],
        ...options[name],
      };
    }

    return options[name] || props[name] || (defaults as any)[name];
  };

export const remove = (arr: InternalSnack[], item: InternalSnack) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

export const add = (arr: InternalSnack[], item: InternalSnack) => {
  return [...arr, item];
};

function SnackbarProvider(props: PropsWithChildren) {
  const [snacks, updateSnacks] = useState<InternalSnack[]>([]);

  const { children } = props;

  const enqueueSnackbar = (
    messageOrOptions:
      | SnackbarMessage
      | (OptionsObject & { message?: SnackbarMessage }),
    optsOrUndefined: OptionsObject = {}
  ) => {
    if (messageOrOptions === undefined || messageOrOptions === null) {
      throw new Error('enqueueSnackbar called with invalid argument');
    }

    const opts = isOptions(messageOrOptions)
      ? messageOrOptions
      : optsOrUndefined;

    const message: SnackbarMessage | undefined = isOptions(messageOrOptions)
      ? messageOrOptions.message
      : messageOrOptions;

    const { key, ...options } = opts;

    const hasSpecifiedKey = isDefined(key);
    const id = hasSpecifiedKey
      ? (key as SnackbarKey)
      : new Date().getTime() + Math.random();

    const merger = merge(options, props);
    const snack: InternalSnack = {
      id,
      ...options,
      message,
      persist: merger('persist'),
      action: merger('action'),
      content: merger('content'),
      variant: merger('variant'),
      anchorOrigin: merger('anchorOrigin'),
      autoHideDuration: merger('autoHideDuration'),
      hideIconVariant: merger('hideIconVariant'),
      iconVariant: merger('iconVariant', true),
      SnackbarProps: merger('SnackbarProps', true),
    };

    if (snack.persist) {
      snack.autoHideDuration = undefined;
    }

    const updatedNotifications = add(snacks, snack);

    updateSnacks(updatedNotifications);

    return id;
  };

  const closeSnackbar = (key?: SnackbarKey) => {
    const shouldCloseAll = key === undefined;

    const updatedNotifications = snacks
      .filter((item) => !shouldCloseAll && item.id !== key)
      .map((item) => ({ ...item }));

    updateSnacks(updatedNotifications);
  };

  return (
    <SnackbarContext.Provider
      value={{ snacks, enqueueSnackbar, closeSnackbar }}
    >
      {children}
      <PortalSnackbarContainer />
    </SnackbarContext.Provider>
  );
}

export { SnackbarProvider };
