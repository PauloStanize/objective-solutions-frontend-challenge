import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  useParams
} from "react-router-dom"
import DOMPurify from 'dompurify'
import Header from './Header'
import LoadingDots from './../../components/LoadingDots'

export default ({ fetch, isPending, character }) => {
  let { id } = useParams()

  useEffect(() => {
    fetch({ id })
  }, [])

  if (isPending || !character.id) return (<LoadingDots />)

  const { name, canonicalName, otherNames, image, description } = character.attributes

  return (
    <CharacterDetails>
      <Header characterName={name || canonicalName} />
      <GridRow>
        <Avatar src={(image || {}).original}></Avatar>

        <Details>
          <SectionTitle>Informações:</SectionTitle>
          {!!otherNames.length && (
            <>
              Apelidos:
              <AlternativeNames>
                {otherNames.map((name, key) => (
                  <li key={key}>{name}</li>
                ))}
              </AlternativeNames>
            </>
          )}
        </Details>

        <Description>
          <SectionTitle>Descrição:</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></div>
        </Description>
      </GridRow>
    </CharacterDetails>
  )
}

const CharacterDetails = styled.div`
  margin-bottom: 30px;
  padding: 0 42px 0 42px;
`

const GridRow = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "avatar"
    "details"
    "description";

  @media only screen and (min-width: 768px) {
    grid-template-columns: 200px 1fr;

    grid-template-areas:
      "avatar details"
      "description description";
  }
`

const Avatar = styled.img`
  grid-area: avatar;
  height: auto;
  width: 200px;
  justify-self: center;
`

const Details = styled.div`
  grid-area: details;
  color: ${({ theme }) => theme.secondaryFont}
`

const Description = styled.div`
  grid-area: description;
`

const AlternativeNames = styled.ul`
  list-style-type: circle;
`

const SectionTitle = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primary}
`