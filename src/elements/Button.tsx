import type { ReactElement } from 'react';

type ButtonTypeProps = {
  type: 'submit';
};

export const Button = ({ type }: ButtonTypeProps): ReactElement => {
  return <button type={type}>Register User</button>;
};
