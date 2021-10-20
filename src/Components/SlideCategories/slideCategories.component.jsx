import React from 'react';

import './slideCategories.styles.scss'

const SlideCategories = ({categories}) => {
    return (
        <div className='Slide-categories'>
            {
                categories.map((item,id) => (
                    <div className='slide-categories-item' key={id}>
                        <h2>{item.name}</h2>
                        <img src={item.categoryCoverImg} alt="" />
                    </div>  
                ))
            }
        </div>
    );
};

export default SlideCategories;