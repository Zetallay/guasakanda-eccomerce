import React from 'react';

import SlideCategories from '../../Components/SlideCategories/slideCategories.component';

const HomePage = (props) => {
    return (
        <div className='Homepage'>
            <SlideCategories categories={props.categories}/>
        </div>
    );
};

export default HomePage;