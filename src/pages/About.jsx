import * as React from 'react';
import about_us from '../assets/about-us.png';
import '../styles/about.css';

export const PageAbout = () => {
    return (
        <div class="about-us">
            <div class="about-us-text">
                <h1 className="item-header">ABOUT US</h1>
                <p class="paragraph-about">Welcome to Beleaf, the ultimate destination for plant enthusiasts! We are a boutique plant shop dedicated to bringing the beauty and benefits of nature into your home or office. Our carefully curated selection of indoor and outdoor plants ranges from classic favorites to rare and exotic species, all grown with care and love.
                    <br/>
                    <br/>
                    At Beleaf, we believe that plants have the power to transform any space into a green oasis, providing a sense of calm, harmony, and well-being. Whether you are a seasoned plant parent or just starting your journey, our team of knowledgeable staff is always ready to guide you through the process of selecting, caring for, and styling your plants.
                    <br/>
                    <br/>
                    
                    We pride ourselves on our commitment to sustainability and ethical sourcing, partnering with local growers and suppliers who share our values. 
                    <br/>
                    <br/>
                    
                    Don't forget to Beleaf in yourself!</p>
            </div>
            <figure className='background-about'>
                <img id="about-us-image" src={about_us} alt={src} />
            </figure>
        </div>
    );
};