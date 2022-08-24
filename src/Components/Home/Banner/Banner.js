import React from "react";
import bannerImg from "../../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="" style={{ width: "100%", height: "900px" }} />
      <div class="waviy centered italic">
        <span style={{'--i':1}}>E</span>
        <span style={{'--i':2}}>A</span>
        <span style={{'--i':3}}>T</span>
        <small> </small>
        <span style={{'--i':4}}> F</span>
        <span style={{'--i':5}}>R</span>
        <span style={{'--i':6}}>E</span>
        <span style={{'--i':7}}>S</span>
        <span style={{'--i':8}}>H</span>
        <small> </small>
        <br />
        <span style={{'--i':9}}>E</span>
        <span style={{'--i':10}}>A</span>
        <span style={{'--i':11}}>T</span>
        <small> </small>
        <span style={{'--i':12}}>H</span>
        <span style={{'--i':13}}>E</span>
        <span style={{'--i':14}}>A</span>
        <span style={{'--i':15}}>L</span>
        <span style={{'--i':16}}>T</span>
        <span style={{'--i':17}}>H</span>
        <span style={{'--i':18}}>Y</span>
      </div>
    </div>
  );
};

export default Banner;
