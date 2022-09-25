// @flow
import React, { useState } from 'react';
import Button from './Button';
import './carousel.scss'
import CarouselItem from './CarouselItem';
import Indicators from './Indicators';
type Props = {

};
const Carousel: React.FC<Props> = () => {

    const items = [
        {
            'header': 'merhaba bu ilk slide',
            'paragraph': 'merhaba bu ilk slide',
            'buttonText': 'merhaba bu ilk slide',
            'image': '/asset/images/napkin.png'

        },

        {
            'header': 'merhaba bu ikiinicnicn slide',
            'paragraph': 'merhaba bu dsfklslkfnkl nekl nfwklrn lk slide',
            'buttonText': 'merhaba bu ilk slide',
            'image': '/asset/images/pngegg.png'

        },

        {
            'header': 'merhaba bu ilk slide',
            'paragraph': 'merhaba bu ilk slide',
            'buttonText': 'merhaba bu ilk slide',
            'image': '/asset/images/toilet-paper.png'

        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    let CHILDREN_LENGTH = items.length;
    const clickNext = () => {

        if (currentIndex + 1 === CHILDREN_LENGTH) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((next) => next + 1);
        }
    };

    const clickPrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(CHILDREN_LENGTH - 1);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    };
    


    return (
        <div className='carousel-section' >
            <div className='left-btn'>
                <Button type="previous" handleClick={clickPrevious} />
            </div>

            <div className='carousel-container'>
                <CarouselItem
                    item={items[currentIndex]} />
                <Indicators
                    currentIndex={currentIndex}
                    CHILDREN_LENGTH={CHILDREN_LENGTH}
                    updateIndex={setCurrentIndex}
                    />
            </div>

            <div className='right-btn '>
                <Button type="next" handleClick={clickNext} />
            </div>
        </div>
    );

};
export default Carousel;