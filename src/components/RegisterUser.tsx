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

  const passwordLongEnough: boolean = formData.password.length >= 8;
  const passwordsMatch: boolean =
    formData.password.length > 0 &&
    formData.password === formData.confirmPassword;
  const isValidForm: boolean = passwordLongEnough && passwordsMatch;
  const errors = {
    password:
      formData.password.length > 0 && !passwordLongEnough
        ? 'Password must be at least 8 characters'
        : '',
    confirmPassword:
      formData.confirmPassword.length > 0 && !passwordsMatch
        ? 'Passwords must match'
        : '',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registrationData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    console.log(registrationData);
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
          errorMsg={errors[key as keyof typeof errors]}
          value={formData[key as keyof UserType]}
          onChange={handleChange}
        />
      ))}
      <Button type='submit' disabled={!isValidForm} />
    </form>
  );
};

export default RegisterUser;
