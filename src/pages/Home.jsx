import React from 'react'
import Header from '../components/header'
import { BackgroundHome } from '../styles/pages/home'
import TextPrimary from '../components/textPrimary'
import { Paragraph } from '../components/subtitle/styles'
import { Button } from '../components/button/styles'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import LearnMore from '../components/learnMore'
import IconsHome from '../components/icons'
import Slider from '../components/Slider/Slider'

function Home() {
  return (
    <div>
      <Header />
          <BackgroundHome>
          <div class="parent">
            <div>
              <Paragraph>ONLY THE BEST FOR YOUR SKIN</Paragraph>
                <TextPrimary>Reveal your</TextPrimary>
                <TextPrimary>natural</TextPrimary>
                <TextPrimary>beauty skin</TextPrimary>
                <Button>
                  Services<FaRegArrowAltCircleRight size={18} />
                </Button>
                <LearnMore />
            </div>
            <Slider />
          </div>
        <IconsHome />
        </BackgroundHome>
    </div>
  )
}

export default Home