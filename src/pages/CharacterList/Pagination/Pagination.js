import React from 'react'
import styled from 'styled-components'

const Pagination = () => (
  <>
    <Container>
      <PreviousButton />
      <PageButton>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>
      <PageButton>4</PageButton>
      <PageButton>5</PageButton>
      <PageButton>6</PageButton>
      <NextButton />
    </Container>
  </>
)

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 16px;
`

const PageButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  font-size: 21px;
  color: #D42026;
  border: 1px solid #D20A0A;
  margin: 0 10px;
`

const PreviousButton = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid #D20A0A;
  margin-right: 2px;
`

const NextButton = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #D20A0A;
  margin-left: 2px;
`

export default Pagination