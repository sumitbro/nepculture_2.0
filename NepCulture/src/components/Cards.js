import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <div className='cards'>
            <h1> FEATURED EXHIBITION </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Jambala.jpg'
                            text='Explore JAMBALA, the showerer of wealth, wisdom and intelligence'
                            label='Gold Statue'
                            path='/exhibition'
                        />
                        <CardItem
                            src='images/Dharmapala Mahakala.jpg'
                            text='Embrace the wrathful and terrifying looking DHARMAPALA MAHAKALA'
                            label='Sculpture'
                            path='/exhibition'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Wood_Mandala.jpg'
                            text='Wood Mandala, Apartment Decor, Elegant Wall Art'
                            label='Handicraft'
                            path='/exhibition'
                        />
                        <CardItem
                            src='images/Dhokra.jpg'
                            text='Tribes Of Four Performing Play Of Dhokra Art'
                            label='Dhokra'
                            path='/exhibition'
                        />
                        <CardItem
                            src='images/Gayatri.jpg'
                            text='Recite the most chanted mantra of GAYATRI'
                            label='Canvas Art'
                            path='/exhibition'
                        />
                    </ul>
                </div>
            </div>
            <div className='cards_blogs'>
                <h1>FEATURED BLOGS</h1>
                <div className='cards_blogs_container'>
                    <div className='cards_blogs_wrapper'>
                        <h2>Title of a longer featured blog post</h2>
                        <p>
                            Multiple lines of text that form the lede, informing new readers quickly
                            and efficiently about what's most interesting in this post's contents.
                        </p>
                        <div className='column'>
                            <Link classname='blogs_continue' to='/blogs'>
                                <text>Continue Reading...</text>
                            </Link>
                            <text>April 1, 2021</text>
                        </div>
                    </div>
                </div>
                <div className='container_blog'>
                    <div className='cards_blogs_container1'>
                        <div className='cards_blogs_wrapper1'>
                            <h2>Title of a longer featured blog post</h2>
                            <p>
                                Multiple lines of text that form the lede, informing new readers quickly
                                and efficiently about what's most interesting in this post's contents.
                        </p>
                            <div className='column'>
                                <Link classname='blogs_continue' to='/blogs'>
                                    <text>Continue Reading...</text>
                                </Link>
                                <text>April 1, 2021</text>
                            </div>
                        </div>
                    </div>
                    <div className='cards_blogs_container2'>
                        <div className='cards_blogs_wrapper2'>
                            <h2>Title of a longer featured blog post</h2>
                            <p>
                                Multiple lines of text that form the lede, informing new readers quickly
                                and efficiently about what's most interesting in this post's contents.
                        </p>
                            <div className='column'>
                                <Link classname='blogs_continue' to='/blogs'>
                                    <text>Continue Reading...</text>
                                </Link>
                                <text>April 1, 2021</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;