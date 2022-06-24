import { Photo } from './../models/Photo';

import axios from "axios";
import { LoremIpsum } from 'lorem-ipsum';

var lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  var API_URL =
    'data:application/json;charset=UTF-8,' +
    encodeURIComponent(JSON.stringify(generateJson()));

  /*Servicio que devuelve un JSON de tipo Photo[]*/
  export const getJSON = () =>{
    return axios.get(API_URL);
  }

 export default function generateJson() {
    const photos: Photo[] = [];

    for (let index = 0; index < 4000; index++) {
        const id: number = Math.trunc(Math.random()*(1084-1)+1);
        const photo: Photo = new Photo(
            id,
            `https://picsum.photos/id/${id}/500/500.jpg`,
            lorem.generateWords(2),
            lorem.generateWords(5)
        )   

        photos.push(photo);
    }
    

    return photos;
}
