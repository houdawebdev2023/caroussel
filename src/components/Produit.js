import React from 'react'
//import Carousel from "react-multi-carousel";
import './Produit.css';
import "react-multi-carousel/lib/styles.css";
import image1 from './media/image1.jpg';
import image2 from './media/image2.jpg';
import image3 from './media/image3.jpg';
import image4 from './media/image4.jpg';
import image5 from './media/image5.jpg';
import image6 from './media/image6.jpg';
import image7 from './media/image7.jpg';
import image8 from './media/image8.jpg';
import image9 from './media/image9.jpg';
import image10 from './media/image10.jpg';
const Produit = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      produit: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      produit: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      produit: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      produit: 1
    }
  };
  
    return (
     
   <div className="container"> 
    <div className="card">
    <img className="product--image" src={image1} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image2} alt="image2"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>

    <div className="card">
    <img className="product--image" src={image3} alt="image3"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>

    <div className="card">
    <img className="product--image" src={image4} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image5} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image6} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image7} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image8} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image9} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    <div className="card">
    <img className="product--image" src={image10} alt="image1"/>
    <h2>Sac à main</h2>
    <p className="prix">150$</p>
    <p>Description du produit</p>
    <p>
      <button>Ajouter au panier</button>
    </p>

    </div>
    </div>


    )
}

export default Produit
