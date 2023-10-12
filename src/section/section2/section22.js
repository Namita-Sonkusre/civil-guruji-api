import React, { useEffect, useState } from "react";
import ".././section.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bridge from "../../images/bridge.jpg";
import bim from "../../images/bim.png";
import highway from "../../images/highway.jpg";
import building from "../../images/building.jpg";
import geotech from "../../images/geotech.jpg";
import architectural from "../../images/architectural.jpg";
import structural from "../../images/structural.png";

const Section22 = () => {
  const [silde,setSlide] = useState(4)
  const AdjustSlide = ()=>{
    const width = window.screen.width
      console.log(width)
      if(width<640 ){
        setSlide(1)
      }else if(width>=640 && width<1159){
        setSlide(2)
      }
      else{
        setSlide(4)
      }
  }

  useEffect(()=>{
    
    window.addEventListener('resize',(e)=>{
      AdjustSlide()
    })
    AdjustSlide()
  },[])
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        centerMode: true,
        autoplay: false,
        slidesToShow: silde,
        slidesToScroll: 2,
      };
  return (
    <div className="tanker">
       <Slider {...settings}>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Building</h3>
              <p>From building of reality</p>
            </div>
            <img src={building} alt="building" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Highway</h3>
              <p>
                Construction <br /> that's built to <br /> connect people
              </p>
            </div>
            <img src={highway} alt="highway" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Bridge</h3>
              <p>
                From concept <br /> to construction
              </p>
            </div>
            <img src={Bridge} alt="Bridge" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>BIM</h3>
              <p>
                Transforming the <br /> skyline
              </p>
            </div>
            <img src={bim} alt="bim" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Geotech</h3>
              <p>Analysis to design,<br/>
                foundations, & <br/>
                retaining structure
              </p>
            </div>
            <img src={geotech} alt="geotech" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Architectural <br/> design</h3>
              <p>Design the best <br/> with right tool</p>
            </div>
            <img src={architectural} alt="architectural" className="building" />
          </div>
        </div>
        <div>
          <div className="slider-block">
            <div className="slider-left">
              <h3>Structural <br/> design</h3>
              <p>Design the bone <br/> of the structure</p>
            </div>
            <img src={structural} alt="structural" className="building" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Section22
