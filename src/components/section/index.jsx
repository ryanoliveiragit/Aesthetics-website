import React from 'react'
import { BackgroundSection } from './styles'
import TextSection from '../textSection'
import LayoutSection from '../LayoutSection'
import Button from '../button'

const Section = ({img, text, cText, subtitle, content, title, pSubtitle, direction}) => {
  return (
    <div>
        <LayoutSection>
        <BackgroundSection>
            <div className="titleSection">
                <h1>Seja o seu padrão de beleza.</h1>
                <p>{pSubtitle}</p>
            </div>
            <div className='parentSection photo'>
                <div className={direction}>
                <div className="direction">
                    <img src={img} alt='modelo'></img>
                        <div className="text">
                            <TextSection>{text}</TextSection>
                            <TextSection>{cText}</TextSection>
                            <p>{content}</p>
                            <p>{subtitle}</p>
                            <Button Style="browns">Saiba mais</Button>
                        </div>
                </div>
                </div>
            </div>
        </BackgroundSection>
        </LayoutSection>
    </div>
  )
}

export default Section