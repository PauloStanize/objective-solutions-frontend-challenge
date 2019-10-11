import React from 'react'
import styled from 'styled-components'
import LoadingDots from './../../../components/LoadingDots'

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
            <ListRow key={key}>
              <Character>
                <CharacterAvatar src={character.attributes.image.original} alt="Avatar" />
                <CharacterName>{character.attributes.name}</CharacterName>
              </Character>

              <Description>
                <DescriptionText>
                  {character.attributes.description}
                </DescriptionText>
              </Description>
            </ListRow>
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
  border-bottom: 2px solid #d4cece;
  min-height: 115px;
  &:hover {
    background: #ece5e5;
    cursor: pointer;
  }
`

const Header = styled.div`
  display: grid;
  align-items: center;
  padding: 0 10px;
  height: 37px;
  background: #D42026;
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Roboto", Times, serif;
  line-height: 19px;
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
  color: #4E4E4E;
  font-size: 21px;
  line-height: 24px;
`

const Description = styled.div`
  padding: 20px 10px;
  color: #4E4E4E;
  font-size: 21px;
  line-height: 1.2em;
`

const DescriptionText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.6em;
`

export default List