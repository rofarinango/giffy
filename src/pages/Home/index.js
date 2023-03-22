import React from 'react';
import { useLocation } from 'wouter';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import SearchForm from 'components/SearchForm';


export default function Home(){
    const [path, pushLocation] = useLocation();
    const {loading, gifs} = useGifs();

    const handleSubmit = ({keyword}) => {
        pushLocation(`/search/${keyword}`);
    }
    
    
    return (
        <>
            <SearchForm onSubmit={handleSubmit}/>
            <div>
                <h3>Last Search</h3>
                <ListOfGifs gifs={gifs}/>
            </div>
            <div>
                Trending
                <TrendingSearches />
            </div>
        </>
    )
};