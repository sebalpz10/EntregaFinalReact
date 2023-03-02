import { Link } from "react-router-dom"
import React from "react";
import Slider from "./Slider/Slider";

const Item = ({ prod }) => {

    return (
        <article key={prod.id} className="product-card">
            <Slider image01={prod.image01} image02={prod.image02} image03={prod.image03} image04={prod.image04}></Slider>
            <h3 className="product-card__price">US$ {new Intl.NumberFormat("de-De").format(prod.price)}</h3>
            <h4>{prod.year + " | " + prod.mileage + " km"}</h4>
            <p className="product-card__title">{prod.brand + " " + prod.model}</p>
            <Link to={"/vehicle/" + prod.id}>Ver mas</Link>
        </article>
    )
}

export default Item