import React,{useState} from 'react';

import { withRouter } from 'react-router';

import './slideCategories.styles.scss'

const SlideCategories = ({categories,history,match}) => {

    const [indexSlider,setIndexSlider]=useState(1)
    
    const slideImage = (index) => {
        setIndexSlider(index)
    }


    return (
        <div className='Slide-categories'>
            {
                categories.map((item,id) => (
                    <div style={{
                        backgroundImage: `url(${item.categoryCoverImg})`
                    }} className={indexSlider === id +  1 ? 'slide-categories-item active' : 'slide-categories-item'} 
                    key={id}
                    >
                        <div className="slide-content">
                            <h2>{item.name.toUpperCase()}</h2>
                            <span 
                                className={indexSlider === id+1 ? 'slide-button active' : 'slide-button'}
                                onClick={()=>
                                    history.push(`${match.url}${item.name}`)
                                }
                            >
                                SHOP NOW
                            </span>
                        </div>
                    </div>  
                ))
            }
            <div className='slide-paginator'>
                {
                    categories.map((item,id)=>(
                        <div
                            onClick={() => slideImage(id+1)} 
                            className={indexSlider === id+1 ? "slide-page active" : "slide-page"}
                            key={id}
                        />
                    ))
                }
            </div>
        </div>
    );
};
export default withRouter(SlideCategories);