import React from 'react'
import { TextSectionStyle } from './styles'

const TextSection = ({children, size}) => {
  return (
    <TextSectionStyle className={size}>{children}</TextSectionStyle>
  )
}

export default TextSection;