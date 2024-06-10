import React from 'react'
import './SearchComponent.css'

const SearchComponent = () => {
return (
    <div className='search'> 
            <input type='search' className='search' placeholder='Type Drug name...' />
            <button>submit</button>
    </div>
)
}

export default SearchComponent