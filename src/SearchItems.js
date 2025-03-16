import React from 'react'

const SearchItems = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="searchItem"></label>
        <input 
            id='searchItem'
            type='text'
            role='search'
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItems
