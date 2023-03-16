import React, { useState} from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import TrendingSearches from '../../components/TrendingSearches';
import { useGifs } from '../../hooks/useGifs';

const POPULAR_GIFS = ["Doge", "Pokemon", "Black Clover", "Haikyuu"];


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
            Tendecias
            <TrendingSearches />
        </div>
        </>
    )
};