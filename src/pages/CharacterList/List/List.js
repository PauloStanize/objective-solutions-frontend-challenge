import React from 'react'
import styled, { css } from 'styled-components'
import useWindowSize from '../../../utils/useWindowSize'
import LoadingDots from './../../../components/LoadingDots'
import {
  Link,
} from "react-router-dom"

const List = ({ characters, isPending }) => {
  const { width: windowWidth } = useWindowSize()
  const shouldRenderForScreenSize = windowWidth >= 768

  return (
    <>
      <HeaderRow>
        <HeaderElement>Personagem</HeaderElement>
        {shouldRenderForScreenSize && (
          <HeaderElement>Descrição</HeaderElement>
        )}
      </HeaderRow>

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

                {shouldRenderForScreenSize && (
                  <Description>
                    <DescriptionText>
                      {character.attributes.description}
                    </DescriptionText>
                  </Description>
                )}
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
  grid-column-gap: 10px;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`

const ListRow = styled(GridRow)`
  border-bottom: 2px solid ${props => props.theme.secondaryBorder};
  min-height: 115px;
  &:hover {
    background: ${props => props.theme.primaryHighlight};
    cursor: pointer;
  }
`

const HeaderRow = styled(GridRow)`
  align-items: center;
  height: 37px;
  color: ${props => props.theme.primaryFont};
  font-size: 16px;
  font-family: "Roboto", Times, serif;
  line-height: 1.2em;
`

const HeaderElement = styled.div`
  display: grid;
  padding: 0 10px;
  height: 37px;
  background: ${props => props.theme.primary};
  align-items: center;
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