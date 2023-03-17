import React from 'react';
import ListOfGifs from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

export default function SearchResults({params}){
    const {keyword} = params;
    const {loading, gifs} = useGifs({keyword});

    return <>
        {loading
        ? "Loading...": <><h3>{decodeURI(keyword)}</h3><ListOfGifs gifs={gifs}/></>
        }
    </>
};