import React from 'react'
import styled from 'styled-components'

const Header = ({ className }) => (
  <div className={className}>
    <StrongTitle>BUSCA KITSU</StrongTitle>
    <div>TESTE FRONT-END</div>
    <CandidateName>Paulo Stanize</CandidateName>
  </div>
)

const CandidateName = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    margin-left: auto !important;
  }
`

const StrongTitle = styled.strong`
  margin-right: 5px;
`

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${props => props.theme.light};
  color: ${props => props.theme.primary};
  width: 100%;
  font-size: 16px;
  line-height: 1.2em;
  font-family: "Roboto", Times, serif;
  font-weight: 100;
  margin-bottom: 12px;
  justify-content: center;

  &:after {
    content: "";
    background: ${props => props.theme.primary};
    position: absolute;
    top: 40px;
    left: 43px;
    height: 4px;
    width: 54px;
  }

  @media only screen and (min-width: 768px) {
    justify-content: left;
    font-size: 27px;
    margin-bottom: 34px;

    &:after {
      top: 50px;
    }
  }
`

export default StyledHeader
