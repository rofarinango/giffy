import React from 'react';
import Gif from '../Gif';
import './ListOfGifs.css';


export default function ListOfGifs({gifs}){

  return <div className='ListOfGifs'>
    {
    gifs.map(singleGif => 
      <Gif className='ListOfGifs-item'
        key={singleGif.id}
        title={singleGif.title}
        id={singleGif.id}
        url={singleGif.url}
        />
    )}
  </div>
}