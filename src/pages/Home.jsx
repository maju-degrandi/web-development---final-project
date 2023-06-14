import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components/Button'

import "../styles/home.css";
import home_plant from '../assets/home-img1.png';
import fruit_type from '../assets/fruit-type.png';
import flowers_type from '../assets/flowers-type.png';
import succulents_type from '../assets/succulents-type.png';
import climbing_type from '../assets/climbing-type.png';
import home_img2 from '../assets/home-img2.jpg';

export const PageHome = () => {
    return (
        <div className="wrapper">
            <div className="apresentation">
                <div className="home-main-text">
                    <span className="green-background">GREEN IS THE NEW BLACK</span>
                    <h2 className="quote main title">Together we grow.</h2>
                    <p className="paragraph">A store that connects people with nature and themselves, for a greener world.</p>
                    
                    <div className="button-div">
                        <Link to={'/shoplist'}>
                            <Button text={'SHOP NOW'} className={'home-main-button'}/>
                        </Link>
                    </div>
                </div>
                <div className="home-main-image">
                    <div id="elipse"></div>
                    <picture>
                        <img id="home-img" src={home_plant} />
                    </picture>
                </div>
            </div>


             <div className="select-type">
                <div className="type-card">
                    <picture>
                        <img className="type-img" src={fruit_type} alt="Fruit Trees" />
                    </picture>
                    <h3 className="second title">Fruit Trees</h3>
                </div>
                <div className="type-card">
                    <picture>
                        <img className="type-img" src={flowers_type} alt="Flowers" />
                    </picture>
                    <h3 className="second title">Flowers</h3>
                </div>
                <div className="type-card">
                    <picture>
                        <img className="type-img" src={succulents_type} alt="Succulents and Caeti" />
                    </picture>
                    <h3 className="second title">Succulents and Caeti</h3>
                </div>
                <div className="type-card">
                    <picture>
                        <img className="type-img" src={climbing_type} alt="Climbing and Foliage plants" />
                    </picture>
                    <h3 className="second title">Climbing and Foliage plants</h3>
                </div>
            </div>

            <div id="about" className="collection">
                <picture>
                    <img className="collection home image" src={home_img2} alt="Flowers bush" />
                </picture>
                <div className="collection-text">
                    <h1 className="collect main title">Beleaf: To plant a garden is to believe<br /> in tomorrow.</h1>
                    <p className="paragraph">Beleaf is a boutique plant shop that provides a carefully curated selection of indoor and outdoor plants, ranging from classic favorites to rare and exotic species. Our knowledgeable staff can guide you through the process of selecting, caring for, and styling your plants. We are committed to sustainability and ethical sourcing, partnering with local growers and suppliers who share our values. At Beleaf, we believe that plants have the power to transform any space into a green oasis, providing a sense of calm, harmony, and well-being. Visit us and discover the joy of plant life!</p>
                    <Link to={'#'}>
                        <Button text={'Explore the collection'} className={'unfilled-button'}/>
                    </Link>
               </div>
            </div>
        </div>
    );
};