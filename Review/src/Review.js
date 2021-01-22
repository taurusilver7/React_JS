import React, { useState } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    
    const {name,job,image,text} = data[index];

    function check(num) {
        if(num > data.length-1) {
            return 0;
        } if(num < 0) {
            return data.length - 1;
        }
        return num;
    }

    function prev() {
        setIndex(index => {
            let newIndex = index + 1;
            return check(newIndex);
        })
    };

    function next() {
        setIndex(index => {
            let newIndex = index - 1;
            return check(newIndex);
        })
    };

    function random() {
        setIndex(Math.floor(Math.random() * 4));
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button onClick={prev} className='prev-btn'>
                    <FaChevronLeft />
                </button>
                <button onClick={next} className='next-btn'>
                    <FaChevronRight />
                </button>
            </div>
            <button onClick={random} className='random-btn'>surprise me</button>

        </article>
    );
}

export default Review;