import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./City.css";

class City extends Component {
  render() {
    const { cityName, image, price, id } = this.props.city;

    return (
      <div className="city col s12">
        <Link to={`/city/${id}`}>
          <div className="image">
            <img src={image} />
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price">{price}</div>
        </Link>
      </div>
    );
  }
}

export default City;

//Array(8)
// 0:
// $$typeof: Symbol(react.element)
// key: "0"
// props:
// city:
// cityName: "london"
// feature: "europe"
// id: 1
// image: "https://airbnb-clone-prexel-images.s3.amazonaws.com/cities/london2.jpg"
// price: 113
