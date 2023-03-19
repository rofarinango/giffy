import React, { useState} from 'react';
import { useLocation } from 'wouter';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';

export default function Home(){
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const {loading, gifs} = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`);
        console.log(keyword);
    }
    
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
        </form>
        <div>
            <h3>Ultima Busqueda</h3>
            <ListOfGifs gifs={gifs}/>
        </div>
        <div>
            Tendecias
            <TrendingSearches />
        </div>
        </>
    )
};