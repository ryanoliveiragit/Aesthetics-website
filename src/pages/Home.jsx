import React from 'react'
import Header from '../components/header'
import { BackgroundHome } from '../styles/pages/home'
import TextPrimary from '../components/textPrimary'
import { Paragraph } from '../components/subtitle/styles'
import { BsArrowUpRight } from 'react-icons/bs'
import LearnMore from '../components/learnMore'
import IconsHome from '../components/icons'
import Slider from '../components/Slider/Slider'
import Section from '../components/section'
import Banner from '../components/banner'
import Modelo8 from '../assets/Modelo8.png'
import Button from '../components/button'
import Eletrolipolise from '../assets/eletrolipolise.jpg'
import Microagulhamento from '../assets/microagulhamento.png'
import SectionRight from '../components/section/indexRight'
import Works from '../components/works/works'

function Home() {
  return (
    <div>
      <Header />
          <BackgroundHome>
          <div class="parent">
            <div>
                <Paragraph>TRATAMENTOS ESTÉTICOS</Paragraph>
                <TextPrimary>Cuidar de você</TextPrimary>
                <TextPrimary>não é custo,</TextPrimary>
                <TextPrimary>é investimento</TextPrimary>
                <Button>
                  Serviços<BsArrowUpRight size={18} />
                </Button>
                <LearnMore />
            </div>
            <Slider />
          </div>
        <IconsHome />

        <Section
            title='Seja o seu padrão de beleza!'
            pSubtitle='Novidades!'
            img={Eletrolipolise} 
            text="Eletrolipolise" 
            content= 'A eletrolipólise é um tratamento estético feito através de agulhas e correntes elétricas, o tratamento é eficaz no combate à gordura localiza e celulite.'
          />

          <SectionRight
            direction="directionLeft"
            img={Microagulhamento} 
            text="Microagulhamento" 
            content= 'O microagulhamento é uma técnica feita por meio de microagulhas, que promove pequenas perfurações na pele, estimulando a produção de colágeno e elastina.'
          />

        <Banner
          img={Modelo8} 
          text="Custom Regimen" 
          cText="For Yor Unique Skin"
          subtitle='About'
          content= 'we know eacg skin type is unique,thats why we have a diferent approach yoy tell us about your skin and we will formulate the best custom regimen for your specific needs'
        />
<Works></Works>
        </BackgroundHome>
    </div>
  )
}

export default Home