import React from 'react'
import styled from 'styled-components'

export default ({ value = "", onChange = () => {}, label }) => {
  return (
    <Container>
      {!!label && (
        <Label>{label}</Label>
      )}
      <Input value={value} onChange={onChange} />
    </Container>
  )  
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`

const Input = styled.input`
  border: 1px solid #A5A5A5;
  border-radius: 5px;
  height: 31px;
  width: 100%;
  padding: 0 5px;
`

const Label = styled.label`
  font-family: "Roboto", Times, serif;
  text-align: left;
  font-size: 16px;
  line-height: 19px;
  color: #D42026;
`