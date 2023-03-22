import React, {useState} from 'react';
import './SearchBar.css';

function SearchForm({onSubmit}){
    const [keyword, setKeyword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="search-form"
            >
            <input 
                onChange={handleChange} 
                type='text' 
                value={keyword}
                required/>
                <button
                    type='submit'
                    >
                    <span>Search</span>
                </button>
        </form>
    )
}

export default React.memo(SearchForm)