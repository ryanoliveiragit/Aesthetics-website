import React from 'react'
import { WorksSectionStyle } from './styles'
import { GrDocumentText } from "react-icons/gr";
import {GrGallery} from "react-icons/gr"
import {GrChat} from "react-icons/gr"
import linda from '../../assets/Modelo7.png'

const Works = ({children}) => {
  return (
        <WorksSectionStyle>
            <div className='titleWork'>
              <h1>How it works?</h1>
              <p>3 aeasy steps to get your own custom regimen</p>
            </div>
            <div>
              <div className="iconsWorks">
                <div className="take">
                  <GrDocumentText size="15%"></GrDocumentText>
                  <h3>TAKE OUR SKIN QUIZ</h3>
                  <p>blablablabla</p>
                </div>
                <div className="receive">
                  <GrGallery size="15%"></GrGallery>
                  <h3>RECEIVE OUR SKIN QUIZ</h3>
                  <p>blablablabla</p>
                </div>
                <div className="give">
                  <GrChat size="15%"></GrChat>
                  <h3>GIVE OUR SKIN QUIZ</h3>
                  <p>blablablabla</p>
                </div>
              </div>
              <div className="img">
              <img src={linda} alt='modelo'></img>
              <div className="titleWorks">
              <h1>Title</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem fugit ea nemo exercitationem, eum recusandae molestiae quibusdam nostrum est dolor vel id sit laudantium, suscipit numquam autem reprehenderit! Nobis, fuga.</p>
              </div>
              </div>
            </div>
        </WorksSectionStyle>
  )
}

export default Works;