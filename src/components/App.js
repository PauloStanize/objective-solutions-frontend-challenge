import React from 'react'
import styled from 'styled-components'
import CharacterList from '../pages/CharacterList'

const App = () => (
  <>
    <Container>
      <CharacterList />
    </Container>
    <Footer />
  </>
)

const Container = styled.div`
  padding: 20px 42px 0 42px;
  min-height: calc(100vh - 32px)
`

const Footer = styled.div`
  width: 100%;
  background: #D20A0A;
  height: 12px;
`

export default App
