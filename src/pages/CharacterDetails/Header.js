import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from "react-router-dom"

const Header = ({ className, characterName = '' }) => (
  <div className={className}>
    <strong>{characterName}</strong>
    <StyledLink to={`/`} >
      Voltar
    </StyledLink>
  </div>
)

const StyledLink = styled(Link)`
  margin-left: auto !important;
  text-decoration: none;
  color: inherit;
`

const StyledHeader = styled(Header)`
  display: inline-flex;
  background: white;
  color: ${props => props.theme.primary};
  width: 100%;
  font-size: 27px;
  line-height: 1.2em;
  font-family: "Roboto", Times, serif;
  font-weight: 100;
  margin-bottom: 34px;
  text-transform: uppercase;

  &:after {
    content: "";
    background: ${props => props.theme.primary};
    position: absolute;
    top: 50px;
    left: 43px;
    height: 4px;
    width: 54px;
  }

  & div {
    margin-left: 5px;
  }
`

export default StyledHeader
