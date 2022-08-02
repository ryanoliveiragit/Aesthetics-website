import React from 'react'
import { Icons } from './styles'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'

const IconsHome = () => {
  return (
    <Icons>
        <IoLogoWhatsapp size={'18%'} color={'white'}/>
        <AiFillInstagram size={'18%'} color={'white'}/>
        <FaUser size={'15%'} color={'white'}/>
    </Icons>
  )
}

export default IconsHome