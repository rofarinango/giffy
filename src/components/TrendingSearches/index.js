import React, { useEffect, useState } from 'react';
import ListOfGifs from '../ListOfGifs';
import getTrendingTermsService from '../../services/getTrendingTermsService';
import Category from 'components/Category';


function TrendingSearches(){
    const [trends, setTrends] = useState([]);
    console.log(trends);

    useEffect(function(){
        getTrendingTermsService()
            .then(setTrends)
    }, []);

    return <Category options={trends}/>
}

export default function LazyTrending(){
    const [show, setShow] = useState(false);

    useEffect(function (){
        const onChange = (entries) => {
            const el = entries[0];
            if(el.isIntersecting){
                setShow(true);
            }
        }
        const observer = new IntersectionObserver(onChange,{
            rootMargin: '100px'
        });

        observer.observe(document.getElementById('LazyTrending'));
    })

    return (
        <div id='LazyTrending'>
            {show ? <TrendingSearches/> : null}
        </div>
    )
}