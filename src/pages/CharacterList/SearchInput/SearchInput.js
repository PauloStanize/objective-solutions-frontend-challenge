import React, { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import ControlledInput from '../../../components/ControlledInput'

const SearchInput = ({ className, setFilter, currentFilters }) => {
  const [searchName, setSearchName] = useState(currentFilters.name)
  const debouncedSetFilter = useCallback(debounce(setFilter, 250), [])

  return (
    <div className={className} >
      <ControlledInput 
        value={searchName} 
        onChange={e => {
          const { value: name } = e.currentTarget
          
          debouncedSetFilter({ ...currentFilters, name })
          setSearchName(name)
        }}
        label="Nome do Personagem"
      />
    </div>
  )
}

const StyledSearchInput = styled(SearchInput)`
  margin-bottom: 12px;
  padding: 0 42px;

  @media only screen and (min-width: 768px) {
    padding: 0;
    width: 400px;
    margin-bottom: 34px;
  }
`

export default StyledSearchInput