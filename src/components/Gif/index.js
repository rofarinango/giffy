import React from 'react';
import { Link } from 'wouter';
import './Gif.css';
export default function Gif({title, id, url}){
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`}>
            <   img loading='lazy' alt={title} src={url}/>
            </Link>
        </div>
    )
}