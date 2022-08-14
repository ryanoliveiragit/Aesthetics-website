import React from 'react'
import TextSection from '../textSection'
import { BackgroundBanner } from './styles'
import Button from '../button'

const Banner = ({img, text, cText, content, title, pSubtitle}) => {
  return (
    <div>
        <BackgroundBanner>
            <TextSection>{title}</TextSection>
            <p>{pSubtitle}</p>
            <div className='parentSection'>
                <div className="photo">
                    <div className="text">
                        <TextSection>{text}</TextSection>
                        <TextSection>{cText}</TextSection>
                        <p>{content}</p>
                        <Button Style={'buttonStyleOrange'}>Acesse já</Button>
                    </div>
                <img src={img} alt='modelo'></img>
                </div>
            </div>
        </BackgroundBanner>
    </div>
  )
}

export default Banner