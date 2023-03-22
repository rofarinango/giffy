import {API_KEY, API_URL} from './settings';

export default function getSingleGif({ id }){
    let apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

    return fetch(apiURL).then(res => res.json()).then(
        response => {
            const {data} = response;
            const {images, title, id} = data;
            const { url } = images.downsized_medium;

            return {title, id, url};
        }
    )

    
}