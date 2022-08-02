import React from 'react'
import { Container } from './styles'
import Layout from '../layout'

const Header = () => {
  return (
    <div>
    <Layout>
      <Container>
        <header>
          <nav>
          <h1 className='name'>Julia.</h1>
            <ul>
              <li>Home</li>
              <li>Make-Up</li>
              <li>Skincare</li>
              <li>Contact</li>
              <li>Supplements</li>
            </ul>
          </nav>
        </header>
      </Container>
    </Layout>
    </div>
  )
}

export default Header