import React from 'react'
import styled from 'styled-components'

const Header = ({ className }) => (
  <div className={className}>
    <strong>BUSCA KITSU</strong>
    <div>TESTE FRONT-END</div>
    <CandidateName>Paulo Stanize</CandidateName>
  </div>
)

const CandidateName = styled.div`
  margin-left: auto !important
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
