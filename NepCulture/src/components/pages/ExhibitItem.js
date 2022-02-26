import React from 'react';
import { Link } from 'react-router-dom';

function ExhibitItem(props) {
    return (
        <>
            <li className='exhibit__item'>
                <Link className='exhibit__item__link' to={props.path}>
                    <figure className='exhibit__item__pic-wrap' data-category={props.label}>
                        <img
                            className='exhibit__item__img'
                            alt=''
                            src={props.src}
                        />
                    </figure>
                    <div className='exhibit__item__info'>
                        <h5 className='exhibit__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default ExhibitItem;