import React from 'react'
import { ButtonStyle } from './styles';
const Button = ({children, Style}) => {
  return (
    <ButtonStyle className={Style}>{children}</ButtonStyle>
  )
}
export default Button;