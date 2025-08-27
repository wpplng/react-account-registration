import type { ReactElement } from 'react';

type ButtonTypeProps = {
  type: 'submit';
  disabled: boolean;
};

export const Button = ({ type, disabled }: ButtonTypeProps): ReactElement => {
  return (
    <button type={type} disabled={disabled}>
      Register User
    </button>
  );
};
