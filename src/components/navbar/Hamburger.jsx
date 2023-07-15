import React from 'react';
// styles
import { SNavBurgerBtn, SNavBurgerBtnMenu } from './styles';

const Hamburger = ({ open, handleClick }) => {
  return (
    <SNavBurgerBtn onClick={handleClick}>
      <SNavBurgerBtnMenu open={open} />
    </SNavBurgerBtn>
  );
};

export default Hamburger;
