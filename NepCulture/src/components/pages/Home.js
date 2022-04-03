import React from 'react';

import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import ProductCategory from './user_product/user_product_category';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <ProductCategory/>

        </>
    );
}

export default Home;