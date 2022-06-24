

import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import generateJson from '../services/ImageList';

const photos = generateJson();
var cards = [];

photos.forEach((element) => {
    cards.push(<Card url={element.photo} textTitle={element.textTitle} textDescription={element.textDescription}/>);
});


class HomePage extends React.Component {
    render() {
            return <><Banner/>
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-4 md:gap-4 md:grid md:grid-cols-3 sm:grid sm:gap-4 sm:grid-cols-2 mt-5 ">
            {cards}
            </div>
            </>

    }
}

export default HomePage;