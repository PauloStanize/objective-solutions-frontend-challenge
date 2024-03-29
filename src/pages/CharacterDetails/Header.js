import React from 'react'
import styled from 'styled-components'
import {
  Link,
} from "react-router-dom"

const Header = ({ className, characterName = '' }) => (
  <div className={className}>
    <StrongTitle>{characterName}</StrongTitle>
    <StyledLink to={`/`} >
      Voltar
    </StyledLink>
  </div>
)

const StrongTitle = styled.strong`
  margin-right: 5px;
  display: inline-block;

  &:after {
    content:'';
    display:block;
    background: ${props => props.theme.primary};
    width: 54px;
    border-bottom:solid ;
  }

  @media only screen and (min-width: 768px) {
    &:after {
      height: 4px;
    }
  }
`

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

  & div {
    margin-left: 5px;
  }
`

export default StyledHeader
