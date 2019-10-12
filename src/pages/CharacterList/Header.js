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

  @media only screen and (min-width: 768px) {
    justify-content: left;
    font-size: 27px;
    margin-bottom: 34px;
  }
`

export default StyledHeader
