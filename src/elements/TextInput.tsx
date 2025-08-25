import { forwardRef, type ReactElement } from 'react';

type InputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
};

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, label, type, autoComplete }, ref): ReactElement => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          ref={ref}
        />
      </>
    );
  }
);
