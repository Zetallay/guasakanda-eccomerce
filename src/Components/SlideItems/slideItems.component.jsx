import React from 'react';

import {withRouter} from 'react-router'

import './slideItems.styles.scss'

const SlideItems = ({shopProducts,title,category,history,match}) => {
    return (
        <div className='slide-items'> 
            <h2 className='slide-item-title'>{title}</h2>
            <div className="slide-featured">
            {
                shopProducts
                .filter(product => product.rating.rate > 3 && product.category === category.name)
                .map((item,id) => 
                    <div className='slide-item-featured' key={id} 
                        onClick={()=>
                            history.push(`pd${match.url}${item.title}/${item.id}`)        
                        }
                    >
                        <div className='slide-item-featured-image'>
                            <p>
                                <img src={item.image} alt="" />
                            </p>
                        </div>
                        <div className="slide-item-featured-details">
                            <p className='slide-item-featured-details-title'>{item.title}</p>
                            <span className='slide-item-featured-details-price'>${item.price}</span>
                        </div>
                    </div>    
                )
            }
            </div>
        </div>
    );
};

export default withRouter(SlideItems);