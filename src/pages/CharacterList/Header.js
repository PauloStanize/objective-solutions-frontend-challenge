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
  color: #D42026;
  width: 100%;
  font-size: 27px;
  line-height: 32px;
  font-family: "Roboto", Times, serif;
  font-weight: 100;
  margin-bottom: 34px;

  &:after {
    content: "";
    background: #D42026;
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
