import React from "react"

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handlchange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handlchange}
                    
                />
)