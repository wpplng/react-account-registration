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
      <label>
        {label}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={label}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
      </label>
      {errorMsg ? <p>{errorMsg}</p> : <p></p>}
    </div>
  );
};
