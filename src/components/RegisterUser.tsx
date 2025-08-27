import { useState, type ReactElement } from 'react';
import { Button } from '../elements/Button';
import { TextInput } from '../elements/TextInput';
import { registerUserSettings } from '../utilities/formData';
import type { UserType } from '../utilities/UserType';

const RegisterUser = (): ReactElement => {
  const [formData, setFormData] = useState<UserType>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
          value={formData[key as keyof UserType]}
          onChange={handleChange}
        />
      ))}
      <Button type='submit' />
    </form>
  );
};

export default RegisterUser;
