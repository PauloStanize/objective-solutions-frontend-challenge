import React from 'react'
import styled from 'styled-components'
import CharacterList from '../pages/CharacterList'

const App = () => (
  <Container>
    <CharacterList />
  </Container>
)

const Container = styled.div`
  padding: 20px 42px 0 42px;
`

export default App
