import { useRef, type ReactElement } from 'react';
import { Button } from '../elements/Button';
import { TextInput } from '../elements/TextInput';
import { registerUserSettings } from '../utilities/formData';

const RegisterUser = (): ReactElement => {
  const refs: Record<
    keyof typeof registerUserSettings,
    React.RefObject<HTMLInputElement | null>
  > = {
    name: useRef(null),
    username: useRef(null),
    email: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in refs) {
      console.log(`${key}:`, refs[key as keyof typeof refs].current?.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(registerUserSettings).map(([key, value]) => (
        <TextInput
          key={key}
          id={value.name}
          name={value.name}
          label={value.label}
          type={value.type}
          autoComplete={value.autoComplete}
          ref={refs[key as keyof typeof refs]}
        />
      ))}
      <Button type='submit' />
    </form>
  );
};

export default RegisterUser;
