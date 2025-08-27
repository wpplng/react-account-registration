import type { ReactElement } from 'react';

type InputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  errorMsg?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  id,
  name,
  label,
  type,
  autoComplete,
  errorMsg,
  value,
  onChange,
}: InputProps): ReactElement => {
  return (
    <div className='text-input'>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};
