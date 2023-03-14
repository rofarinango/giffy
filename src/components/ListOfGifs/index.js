import React from 'react';

import Gif from '../Gif'


export default function ListOfGifs({gifs}){

  return <>
    {
    gifs.map(singleGif => 
      <Gif
        key={singleGif.id}
        title={singleGif.title}
        id={singleGif.id}
        url={singleGif.url}
        />
    )}
  </>
}