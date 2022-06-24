import React from 'react';


function Image({url}) {
  return <img loading='lazy' className="rounded-t-lg" src={url} alt="" />;
}
class Card extends React.Component {
    render() {
      return <><div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
      <Image url={this.props.url}/>
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