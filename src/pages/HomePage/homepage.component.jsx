import React from 'react';

import SlideCategories from '../../Components/SlideCategories/slideCategories.component';
import SlideItems from '../../Components/SlideItems/slideItems.component';


const HomePage = ({categories,shopProducts}) => {
    
    return (
        <div className='Homepage'>
            <SlideCategories categories={categories}/>
            <div className="container">
                {
                    categories.map((category,id) =>
                        <SlideItems title={`Featured ${category.name}`} category={category} shopProducts={shopProducts} key={id}/>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;