import React, { useState } from 'react'
import heroShoe1 from "./assets/heroShoe1.png"
import heroShoe2 from "./assets/heroShoe2.png"
import heroShoe3 from "./assets/heroShoe3.png"
export default function Hero() {
  const [shoe, setShoe] = useState("")

  const onClick = (e) => {
    setShoe(e)
  }
  console.log(shoe)
  return (
    <div id="hero" className="hero_main">
      <div className="center_circle"></div>

      <div className="hero_img">

        <img src={`${shoe === "1" ? heroShoe2 : (shoe === "2" ? heroShoe1 : heroShoe3)
          }`} alt="" />
      </div>
      <div className="hero_description">
        <h3>New Arrival</h3>
        <h1>Puma 2.0</h1>
        <p>We Have new arrival Colors  Puma Brand </p>
      </div>
      <div className="shoe_menu">

        <div className="menu" >
          <div className=" color color_1" ></div>
          <h6 onClick={() => onClick("1")} >Purple</h6>
        </div>

        <div className="menu">
          <div className=" color color_2" ></div>
          <h6 onClick={() => onClick("2")}>White</h6>
        </div>

        <div className="menu" >
          <div className=" color color_3" name="heroShoe2" onClick={onClick}></div>
          <h6 onClick={() => onClick("3")}>Sky Blue</h6>
        </div>

      </div>
    </div>
  )
}
