import React, {useState} from "react";
import dishes from './dishe';
import Rating from "./Rating";


const Catalog = () => {
  const [catalog, setCatalog] = useState(dishes)

  return (
    <div className="container">
      <div className="description">
        <h4 className="menu-subtitle">Menu</h4>
        <h1 className="menu-title">Food Full of treaty Love</h1>
        <p className="menu-desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
      </div>
      <div className="row">
        {
          catalog.map(el =>
            <div className="col-4" key={el.id}>
              <div className="catalog-item">
                <img src={el.img} alt="" className="img"/>
                <h3 className="food-title">Food: {el.title}</h3>
                <h5 className="food-price">Price: {el.price}$</h5>
                <p className="food-desc">Description: {el.desc}</p>
                <div className="food-rating">
                  <Rating rating={el.rating}/>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Catalog