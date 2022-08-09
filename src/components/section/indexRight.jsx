import React from 'react'
import { BackgroundSection } from './styles'
import TextSection from '../textSection'
import LayoutSection from '../LayoutSection'
import Button from '../button'

const SectionRight = ({img, text, cText, subtitle, content, title, pSubtitle, direction}) => {
  return (
    <div>
        <LayoutSection>
        <BackgroundSection>
            <TextSection font="font">{title}</TextSection>
            <p>{pSubtitle}</p>
            <div className='parentSection photo'>
                <div className={direction}>
                <div className="direction right">
                        <div className="text">
                            <TextSection>{text}</TextSection>
                            <TextSection>{cText}</TextSection>
                            <p>{content}</p>
                            <p>{subtitle}</p>
                            <Button Style="browns">Saiba mais</Button>
                        </div>
                        <img src={img} alt='modelo'></img>
                    </div>
                </div>
            </div>
        </BackgroundSection>
        </LayoutSection>
    </div>
  )
}

export default SectionRight