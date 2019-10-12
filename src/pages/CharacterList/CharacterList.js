import React, { useEffect } from 'react'
import Header from './Header'
import SearchInput from './SearchInput'
import List from './List'
import Pagination from './Pagination'

export default ({ fetch, pagination, filters }) => {
  useEffect(() => {
    fetch()
  }, [fetch, pagination.limit, pagination.offset, filters.name])
  
  return (
    <>
      <Header />
      <SearchInput />
      <List />
      <Pagination />
    </>
  )
}
