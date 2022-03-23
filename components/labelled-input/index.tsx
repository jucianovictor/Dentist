import React, { InputHTMLAttributes } from 'react';
import {
  Label,
  TextInput,
  EmailInput,
  PasswordInput,
} from './style';

export interface LabelledInputProps extends InputHTMLAttributes<Element> {
  label: string
  type: 'text' | 'email' | 'password';
  id: string
}

type CommonAttributes = Pick<LabelledInputProps, 'id' | 'name'>;

const inputs = {
  text: (attrs: InputHTMLAttributes<Element>, cmnAttrs: CommonAttributes): JSX.Element => (
    <TextInput
      {...cmnAttrs}
      autoComplete='nickname'
      placeholder={attrs.placeholder}
      required={attrs.required}
    ></TextInput>
  ),
  password: (attrs: InputHTMLAttributes<Element>, cmnAttrs: CommonAttributes): JSX.Element => (
    <PasswordInput
      {...cmnAttrs}
      autoComplete='new-password'
      required={attrs.required}
      maxLength={attrs.maxLength || 12}
      minLength={attrs.maxLength || 4}
      size={attrs.size || 12}
    ></PasswordInput>
  ),
  email: (attrs: InputHTMLAttributes<Element>, cmnAttrs: CommonAttributes): JSX.Element => (
    <EmailInput
      {...cmnAttrs}
      autoComplete='email'
      required={attrs.required}
      placeholder={attrs.placeholder}
    ></EmailInput>
  ),
};

const LabelledInput: React.FC<LabelledInputProps> = (props: LabelledInputProps) => (
  <div>
    <Label htmlFor={props.id}>{props.label}</Label>
    {inputs[props.type](props, {
      id: props.id,
      name: props.name || props.id,
    })}
  </div>
);

export default LabelledInput;
