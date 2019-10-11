import React, { useEffect } from 'react'
import Header from './Header'
import List from './List'
import Pagination from './Pagination'

export default ({ fetch }) => {
  useEffect(() => {
    fetch()
  }, [fetch]);

  
  return (
    <>
      <Header />
      <List />
      <Pagination />
    </>
  )
}
