import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Pagination = ({ total, perPage = 10, pagesCount = 5, currentPagination, setPagination }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const lastPage = Math.floor(total/perPage) + 1

  useEffect(() => {
    const newPage = Math.floor(currentPagination.offset/currentPagination.limit) + 1 

    setCurrentPage(Math.min(lastPage, newPage))
  }, [currentPagination.offset, currentPagination.limit])

  useEffect(() => {
    setPagination({ limit: perPage })
  }, [perPage])

  const handlePageClick = (pageNumber) => {
    setPagination({
      offset: currentPagination.limit * (pageNumber - 1),
    })
  }

  const handlePreviousClick = () => {
    const previousOffset = currentPagination.offset - currentPagination.limit

    setPagination({
      offset: previousOffset >= 0 ? previousOffset : 0,
    })    
  }

  const handleNextClick = () => {
    setPagination({
      offset: Math.min(currentPagination.offset + currentPagination.limit, total),
    })
  }

  const [pages, setPages] = useState({
    1: { number: 1, isActive: true },
  })

  useEffect(() => {
    const numberOfPages = Math.ceil(total / perPage) || 1
    const firstShowingPage = Math.max(1, currentPage - 2)
    const lastShowingPage = Math.min(numberOfPages, currentPage + 2)

    const pagesToBeRendered = {}

    for(let i = firstShowingPage; i <= lastShowingPage; i++) {
      pagesToBeRendered[i] = {
        number: i,
        isActive: currentPage === i
      }
    }

    setPages(pagesToBeRendered)
  }, [currentPage, total])

  return (
    <>
      <Container>
        <PreviousButton disabled={currentPage <= 1} onClick={handlePreviousClick} />
        {
          Object.entries(pages).map(([key, { isActive, number }]) => (
            <PageButton key={key} isActive={isActive} onClick={() => handlePageClick(number)} >{number}</PageButton>
          ))
        }
        <NextButton disabled={currentPage >= lastPage} onClick={handleNextClick} />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 16px;
`

const ResetedStyleButton = styled.button`
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  outline: none;
  background-color: inherit;
  border: none;
  text-align: center;
  padding: 0;
`

const PageButton = styled(ResetedStyleButton)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  font-size: 21px;
  line-height: 1.1em;
  color: ${props => props.isActive ? 'white' : props.theme.primary};
  background-color: ${props => props.isActive ? props.theme.primary : 'white'};
  border: 1px solid ${props => props.theme.primary};
  margin: 0 10px;
`

const PreviousButton = styled(ResetedStyleButton)`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid ${props => props.disabled ? props.theme.buttonDisabled : props.theme.buttonEnabled};
  margin-right: 2px;
`

const NextButton = styled(ResetedStyleButton)`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid ${props => props.disabled ? props.theme.buttonDisabled : props.theme.buttonEnabled};
  margin-left: 2px;
`

export default Pagination