import React, { useState } from 'react'
import './styles.css'


export default function SearchBar({onSubmit}) {
const [query, setQuery] = useState('')
   
  
   const handleChangeInput = event => {
        setQuery( event.currentTarget.value.toLowerCase() 
        )
    }
  
    const handleSubmit = event => {
        event.preventDefault();
        if (query.trim() === '') {
            alert('Add yuor query, please');
            return
        }
      onSubmit(query); 
      setQuery( '' )
    }
    

    return (
      <div>
        <header
          className="Searchbar">
          <form
            className="SearchForm" onSubmit={handleSubmit}>
            <button
              type="submit" className="SearchForm-button" >
              <span
                className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              value={query}
              name='query'
                    type="text"
                    onChange={handleChangeInput}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    )
}
