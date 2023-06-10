import * as React from 'react';

import { Button } from '../components/Button'

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
import { Link } from 'react-router-dom';

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

            <div className="best-sellers">
                <img id="background-img" src={flor_fundo2} />
                <div className="best-text">
                    <h2 className="best main title">Bestsellers</h2>
                    <div className='button-center'>
                        <Link to={'/shoplist'}>
                            <Button text={'Shop All'} className={'shop unfilled-button'}/>
                        </Link>
                    </div>
                </div>
                <div className="best-card">
                    <img className="best-image" src={echeveria} alt="Echeveria" />
                    <div className="button-full">
                        <Link to={'/'}>
                            <Button text={'ADD TO CART'} className="add button-full home-main-button" />
                        </Link>
                    </div>
                   
                    <h4 className="best title">ECHEVERIA PERLE VON NURNBERG</h4>
                    <p className="mini paragraph">‘Perle von Nurnberg' is a beautiful evergreen
                        gray succulent that turns pink and purple under
                        full sun. It has pink flowers with yellow
                        interiors that bloom in the summer.</p>
                    <span className="price">$ 7</span>
                </div>
                <div className="best-card">
                    <img className="best-image" src={hydrangea} alt="hydrangea" />
                    <div className="button-full">
                        <Link to={'/'}>
                            <Button text={'ADD TO CART'} className="add button-full" />
                        </Link>
                    </div><h4 className="best title">HYDRANGEA</h4>
                    <p className="mini paragraph">With beautiful flowers, these elegant plants are
                        easy to cultivate, tolerate almost any type of soil,
                        and produce abundant blooms. Has many colors
                        and sometimes all blooming on the same plant!</p>
                    <span className="price">$ 13</span>
                </div>
            </div>

            <div className="ornaments">
                <div className="ornaments-text">
                    <h1 className="ornament main title">More than ornaments,
                        plants are a lifestyle.</h1>
                    <p className="paragraph">Discover the ideal foliage for the interior of your home,
                        with exuberant colors and varied sizes. Or even for the
                        external garden, showy and beautiful.</p>
                        <Link to={'/shoplist'}>
                            <Button text={'Shop All'} className={'home-main-button'}/>
                        </Link>
                </div>
                <picture>
                    <img className="ornaments home image" src={home_img3} alt="Flowers bush" />
                </picture>
            </div>

            <div className="best-sellers">
                <div className="best-text">
                    <h2 className="best main title">Trends</h2>
                    <div className='button-center'>
                        <Link to={'/shoplist'}>
                            <Button text={'Shop All'} className={'shop unfilled-button'}/>
                        </Link>
                    </div>
                </div>
                <div className="best-card">
                    <img className="best-image" src={peace_lily} alt="Echeveria" />
                    <div className="button-full">
                        <Link to={'/'}>
                            <Button text={'ADD TO CART'} className="add button-full" />
                        </Link>
                    </div><h4 className="best title">PEACE LILY</h4>
                    <p className="mini paragraph">Known for its brilliant white flowers, glossy
                        leaves and acceptance of dark places, Peace
                        Lilies are easy-to-grow plants for every kind
                        of plant parent.</p>
                    <span className="price">$ 20</span>
                </div>
                <div className="best-card">
                    <img className="best-image" src={snake_plant} alt="hydrangea" />
                    <div className="button-full">
                        <Link to={'/'}>
                            <Button text={'ADD TO CART'} className="add button-full" />
                        </Link>
                    </div><h4 className="best title">SNAKE PLANT</h4>
                    <p className="mini paragraph">Sansevieria is another easy houseplant which
                        doesn't require a lot of water and has the added
                        bonus of removing toxins from the atmosphere.
                            </p>
                    <span className="price">$ 15</span>
                </div>
            </div>
        </div>
    );
};