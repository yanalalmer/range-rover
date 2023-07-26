import React from 'react';
// styles
import { SButton } from './styles';

const Button = ({ content, negative }) => {
  return <SButton negative={negative}>{content}</SButton>;
};

export default Button;
