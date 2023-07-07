import React from 'react'
import { FaStar } from "react-icons/fa";
import {testimonialList} from "../../helpers/testimonialList";
import "./testimonial.css"

const Testimonials = () => {
  return (
    <div className="productList">
    {testimonialList.map(data => {
      return (
        <div key={data.id} className="productCard">
          <div className="card">
          <div className="productCard_content">

            <div className="displayStack_1">
              <h3 className="cardName">{data.title}</h3>
            </div>

            <div className="productRating">
              {[...Array(data.rating)].map((index) => (
                <FaStar className="star" id={index + 1} key={index} />
              ))}
            </div>

            <div className="displayStack_2">
              <p className="cardInfo">{data.info}</p>
            </div>

          </div>
          </div>
        </div>
      )
    })}
  </div>
  )
}

export default Testimonials