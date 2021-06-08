import React from 'react'

const FooterStyle = {
  background: "#0d6efd",
  height: "65px",
  textAlign: "center",
  color: "white",
  padding: "10px 0"
}


export default function Footer() {
  return (
    <div className="footer" style={FooterStyle}>
      <div className="social_media">
        <i className="fab fa-facebook" style={{ margin: "5px 10px", fontSize: "20px" }}></i>
        <i className="fab fa-github" style={{ margin: "5px 10px", fontSize: "20px" }}></i>
      </div>
      <p>By:Digay</p>
    </div>
  )
}
