import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import CharacterList from '../pages/CharacterList'
import CharacterDetails from '../pages/CharacterDetails'

const App = () => (
  <>
    <Container>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <CharacterDetails />
          </Route>
          <Route path="/">
            <CharacterList />
          </Route>
        </Switch>
      </Router>
    </Container>
    <Footer />
  </>
)

const Container = styled.div`
  padding-top: 12px;
  min-height: calc(100vh - 24px);
  
  @media only screen and (min-width: 768px) {
    padding: 20px 42px 0 42px;
    min-height: calc(100vh - 32px);
  }
`

const Footer = styled.div`
  width: 100%;
  background: ${props => props.theme.secondary};
  height: 12px;
`

export default App
