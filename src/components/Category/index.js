import React from 'react';
import { Link } from 'wouter';
import './Category.css';

export default function Category({name, options = []}){
    return (
        <div>
            <h3>{name}</h3>
            <ul className='trending-list'>
                {
                    options.map((singleOption, index) => (
                        <li key={index}>
                            <Link 
                            to={`/search/${singleOption}`}>{singleOption}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}