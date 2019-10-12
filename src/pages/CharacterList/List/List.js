import React from 'react'
import styled from 'styled-components'
import LoadingDots from './../../../components/LoadingDots'
import {
  Link,
} from "react-router-dom"

const List = ({ characters, isPending }) => {
  return (
    <>
      <GridRow>
        <Header>Personagem</Header>
        <Header>Descrição</Header>
      </GridRow>

      {isPending ? (
        <LoadingDots />
      ) : (
          characters.map((character, key) => (
            <Link to={`/details/${character.id}`} key={key} style={{ textDecoration: 'none' }} >
              <ListRow>
                <Character>
                  <CharacterAvatar src={(character.attributes.image || {}).original} alt="Avatar" />
                  <CharacterName>{character.attributes.name}</CharacterName>
                </Character>

                <Description>
                  <DescriptionText>
                    {character.attributes.description}
                  </DescriptionText>
                </Description>
              </ListRow>
            </Link>
          ))
        )
      }
    </>
  )
}

const GridRow = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(400px, 3fr);
  grid-column-gap: 10px;
`

const ListRow = styled(GridRow)`
  border-bottom: 2px solid ${props => props.theme.secondaryBorder};
  min-height: 115px;
  &:hover {
    background: ${props => props.theme.primaryHighlight};
    cursor: pointer;
  }
`

const Header = styled.div`
  display: grid;
  align-items: center;
  padding: 0 10px;
  height: 37px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.primaryFont};
  font-size: 16px;
  font-family: "Roboto", Times, serif;
  line-height: 1.2em;
`

const Character = styled.div`
  display: grid;
  grid-template-columns: 58px 1fr;
  grid-column-gap: 25px;
  align-items: center;
  padding: 18px;
`

const CharacterAvatar = styled.img`
  border-radius: 50%;
  height: 58px;
  width: 58px;
`

const CharacterName = styled.div`
  color: ${props => props.theme.secondaryFont};
  font-size: 21px;
  line-height: 24px;
`

const Description = styled.div`
  padding: 20px 10px;
  color: ${props => props.theme.secondaryFont};
  font-size: 21px;
  line-height: 1.2em;
`

const DescriptionText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.6em;
`

export default List