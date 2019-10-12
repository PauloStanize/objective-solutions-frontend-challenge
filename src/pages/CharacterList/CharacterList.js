import React, { useEffect } from 'react'
import useWindowSize from '../../utils/useWindowSize'
import Header from './Header'
import SearchInput from './SearchInput'
import List from './List'
import Pagination from './Pagination'

export default ({ fetch, pagination, filters }) => {
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    fetch()
  }, [fetch, pagination.limit, pagination.offset, filters.name])
  
  return (
    <>
      <Header />
      <SearchInput />
      <List />
      <Pagination sideButtonCount={windowWidth >= 768 ? 2: 1}></Pagination>
    </>
  )
}
