import React, { useEffect } from 'react'
import Header from './Header'
import List from './List'
import Pagination from './Pagination'

export default ({ fetch, pagination }) => {
  useEffect(() => {
    fetch()
  }, [fetch, pagination.limit, pagination.offset])
  
  return (
    <>
      <Header />
      <List />
      <Pagination />
    </>
  )
}
