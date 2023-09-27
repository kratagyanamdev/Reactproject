import React, { useState } from 'react';

import classes from './Header.module.css';
import CategoriesBar from './CategoriesBar';
import Items from '../Items/Items';
import Footer from './Footer';

function Home() {
    const categories = ["All", "T-Shirts", "Jeans", "Shirts", "Shoes"
];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // You can also implement logic here to update your product display based on the selected category.
    };

return (
    <>
        <div className={classes['main-image']} >
            <img src='./assets/fashion.jpg' alt='Main Page Fashion Background'/>
        </div>

        <CategoriesBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
        />      
        
        <Items category={ selectedCategory }/>

        <Footer />    
    </>
);
}

export default Home;