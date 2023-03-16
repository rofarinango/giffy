import React, { useEffect, useState } from 'react';
import ListOfGifs from '../ListOfGifs';
import getTrendingTermsService from '../../services/getTrendingTermsService';


export default function TrendingSearches(){
    const [trends, setTrends] = useState([]);
    console.log(trends);

    useEffect(function(){
        getTrendingTermsService()
            .then(setTrends)
    }, []);

    return <ListOfGifs gifs={trends}/>
}