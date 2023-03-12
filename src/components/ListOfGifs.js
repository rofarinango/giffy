import React, {useEffect, useState} from 'react';

import Gif from './Gif'
import getGifs from '../services/getGifs';


export default function ListOfGifs({keyword}){
    const [gifs, setGifs] = useState([]);
    useEffect(function (){
        getGifs({ keyword }).then(gifs => setGifs(gifs));
      },[keyword]);

    return gifs.map(singleGif => 
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          id={singleGif.id}
          url={singleGif.url}
          />
      );
}