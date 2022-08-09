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
              <li>Inicio</li>
              <li>Serviços</li>
              <li>Produtos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>
      </Container>
    </Layout>
    </div>
  )
}

export default Header