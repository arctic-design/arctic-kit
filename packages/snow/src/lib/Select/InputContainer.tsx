import { PropsWithChildren, forwardRef } from 'react';
import { SnowColor, SnowSize } from '../types';

import { InputContainerRoot } from './StyledElements';

type InputContainerProps = {
  color?: SnowColor;
  size?: SnowSize;
  role?: string;
  className?: string;
  id?: string;
};

const InputContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<InputContainerProps>
>(({ size, color, children, ...props }, ref) => {
  return (
    <InputContainerRoot ref={ref} color={color} inputsize={size} {...props}>
      {children}
    </InputContainerRoot>
  );
});

InputContainer.displayName = 'InputContainer';

export default InputContainer;
