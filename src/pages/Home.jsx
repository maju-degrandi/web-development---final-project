import * as React from 'react';
import "../styles/home.css";
import home_plant from '../assets/home-img1.png';
import fruit_type from '../assets/fruit-type.png';
import flowers_type from '../assets/flowers-type.png';
import succulents_type from '../assets/succulents-type.png';
import climbing_type from '../assets/climbing-type.png';
import home_img2 from '../assets/home-img2.jpg';
import home_img3 from '../assets/home-img3.jpg';
import peace_lily from '../assets/peace-lily.jpg';
import snake_plant from '../assets/snake-plant.jpg';
import flor_fundo1 from '../assets/flor-fundo1.png';
import flor_fundo2 from '../assets/flor-fundo2.png';
import echeveria from '../assets/Echeveria Perle Von Nurnberg.jpg';
import hydrangea from '../assets/hydrangea.jpg';

export const PageHome = () => {
    return (
        <>
            <div class="apresentation">
                <div class="home-main-text">
                    <spam class="green-background">GREEN IS THE NEW BLACK</spam> 
                    <h2 class="quote main title">Together we grow.</h2>
                    <p class="paragraph">A store that connects people with nature and themselves, for a greener world.</p>
                    <div class="button-div">
                        <button id="home-main-button">SHOP NOW</button>
                    </div>
                </div>
                <div class="home-main-image">
                    <div id="elipse"></div>
                    <picture>
                        <img id="home-img" src={home_plant} />
                    </picture>
                </div>
            </div>
            
            
            <div class="select-type">
                <div class="type-card">
                    <picture>
                        <img class="type-img" src={fruit_type} alt="Fruit Trees" />
                    </picture>
                    <h3 class="second title">Fruit Trees</h3>
                </div>
                <div class="type-card">
                    <picture>
                        <img class="type-img" src={flowers_type} alt="Flowers" />
                    </picture>
                    <h3 class="second title">Flowers</h3>
                </div>
                <div class="type-card">
                    <picture>
                        <img class="type-img" src={succulents_type} alt="Succulents and Caeti" />
                    </picture>
                    <h3 class="second title">Succulents and Caeti</h3>
                </div>
                <div class="type-card">
                    <picture>
                        <img class="type-img" src={climbing_type}alt="Climbing and Foliage plants" />
                    </picture>
                    <h3 class="second title">Climbing and Foliage plants</h3>
                </div>
            </div>
    
            <div id="about" class="collection">
                <picture>
                    <img class="collection home image" src={home_img2} alt="Flowers bush" />
                </picture>
                <div class="collection-text">
                    <h1 class="collect main title">Beleaf: To plant a garden is to believe<br /> in tomorrow.</h1>
                    <p class="paragraph">Beleaf is a boutique plant shop that provides a carefully curated selection of indoor and outdoor plants, ranging from classic favorites to rare and exotic species. Our knowledgeable staff can guide you through the process of selecting, caring for, and styling your plants. We are committed to sustainability and ethical sourcing, partnering with local growers and suppliers who share our values. At Beleaf, we believe that plants have the power to transform any space into a green oasis, providing a sense of calm, harmony, and well-being. Visit us and discover the joy of plant life!</p>
                    <button class="button-outline">Explore the collection</button>
                </div>
            </div> 
    
            <div class="best-sellers">
                <img id="background-img" src={flor_fundo1}/>
                <div class="best-text">
                    <h2 class="best main title">Bestsellers</h2>
                    <button class="shop button-outline">Shop All</button>
                </div>
                <div class="best-card">
                    <img class="best-image" src={echeveria} alt="Echeveria" />
                    <button class="add button-full">ADD TO CART</button>
                    <h4 class="best title">ECHEVERIA PERLE VON NURNBERG</h4>
                    <p class="mini paragraph">‘Perle von Nurnberg' is a beautiful evergreen 
                        gray succulent that turns pink and purple under
                         full sun. It has pink flowers with yellow 
                        interiors that bloom in the summer.</p>
                    <span class="price">$ 7</span>
                </div>
                <div class="best-card">
                    <img class="best-image" src={hydrangea} alt="hydrangea" />
                    <button class="add button-full">ADD TO CART</button>
                    <h4 class="best title">HYDRANGEA</h4>
                    <p class="mini paragraph">With beautiful flowers, these elegant plants are 
                        easy to cultivate, tolerate almost any type of soil, 
                        and produce abundant blooms. Has many colors 
                        and sometimes all blooming on the same plant!</p>
                    <span class="price">$ 13</span>
                </div>
            </div> 
    
            <div class="ornaments">
                <div class="ornaments-text">
                    <h1 class="ornament main title">More than ornaments, 
                        plants are a lifestyle.</h1>
                    <p class="paragraph">Discover the ideal foliage for the interior of your home, 
                        with exuberant colors and varied sizes. Or even for the 
                        external garden, showy and beautiful.</p>
                    <button class="ornament-button button-outline">Shop all</button>
                </div>
                <picture>
                    <img class="ornaments home image" src={home_img3} alt="Flowers bush" />
                </picture>
            </div> 
    
            <div class="best-sellers">
                <div class="best-text">
                    <h2 class="best main title">Trends</h2>
                    <button class="shop button-outline">Shop All</button>
                </div>
                <div class="best-card">
                    <img class="best-image" src={peace_lily} alt="Echeveria" />
                    <button class="add button-full">ADD TO CART</button>
                    <h4 class="best title">PEACE LILY</h4>
                    <p class="mini paragraph">Known for its brilliant white flowers, glossy 
                        leaves and acceptance of dark places, Peace 
                        Lilies are easy-to-grow plants for every kind 
                        of plant parent.</p>
                    <span class="price">$ 20</span>
                </div>
                <div class="best-card">
                    <img class="best-image" src={snake_plant} alt="hydrangea" />
                    <button class="add button-full">ADD TO CART</button>
                    <h4 class="best title">SNAKE PLANT</h4>
                    <p class="mini paragraph">Sansevieria is another easy houseplant which 
                        doesn't require a lot of water and has the added 
                        bonus of removing toxins from the atmosphere. 
                        It needs a light position but not in a south facing 
                        window.</p>
                    <span class="price">$ 15</span>
                </div>
            </div>
        </>
    );
};