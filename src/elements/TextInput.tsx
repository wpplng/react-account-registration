import type { ReactElement } from 'react';

type InputProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  id,
  name,
  label,
  type,
  autoComplete,
  value,
  onChange,
}: InputProps): ReactElement => {
  return (
    <div>
      <label>
        {label}
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
