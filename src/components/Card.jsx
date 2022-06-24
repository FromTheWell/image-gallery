import React, { Component } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  const id = Math.trunc(Math.random() * (1084 - 1) + 1);
  const url = `https://picsum.photos/id/${id}/638/500.jpg `;
  const textTitle = lorem.generateWords(2);
  const textDescription = lorem.generateWords(5);
  

class Card extends React.Component {
    render() {
      return <><div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="rounded-t-lg" src={this.props.url} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{this.props.textTitle}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{this.props.textDescription}.</p>
      </div>
  </div></>
  ;
    }
  }

export default Card;