import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../component/header.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidStarHalf, BiSolidStar, BiStar, BiRupee } from "react-icons/bi";

const Section23 = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    title: "All",
    key: "All",
  });
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
    infinite: false,
    speed: 1500,
    centerMode: false,
    autoplay: false,
    slidesToShow: silde,
    slidesToScroll: 1,
  };
  const [category, setCategory] = useState([{ title: "All", key: "All" }]);
  const getAllCourses = async () => {
    try {
      let coursesResult = (
        await axios.get("http://localhost:3002/course/landing-page-courses")
      ).data;
      setCategory([
        { title: "All", key: "All" },
        ...Object.keys(coursesResult).map((e) => {
          return { title: e.split("-Id-")[0], key: e };
        }),
      ]);
      setCourses(coursesResult);
    } catch (error) {
      console.log(error);
    }
  };
  const getRatingStar = (num) => {
    let d = [];
    for (let i = 1; i <= 5; i++) {
      if (i - num >= 1) {
        d.push("zero");
      } else if (i - num > 0 && i - num < 1) {
        d.push("half");
      } else {
        d.push("full");
      }
    }
    return d;
  };

  useEffect(() => {
    getAllCourses();
  }, []);
  const setCat = (val) => {
    setSelectedCategory(val);
  };
  const calculateDiscountPercentage = (discountedPrice, listPrice) => {
    if (listPrice === 0) {
      return 0;
    }
    return Math.round(((listPrice - discountedPrice) / listPrice) * 100);
  };
  return (
    <div className="tanker">
      <div style={{ display: "flex" }}>
        {category.map((cat) => (
          <button
            style={{ margin: "0 0.5rem" }}
            className={cat.key !== selectedCategory.key ? "menu" : "menu bg"}
            onClick={() => setCat(cat)}
          >
            {cat.title}
          </button>
        ))}
      </div>
      <div>
        {Object.keys(courses).map((category) => {
          return selectedCategory.key === "All" ||
            selectedCategory.key === category ? (
            <div>
              <h5 className="course-name"> {category.split("-Id-")[0]}</h5>
              <div className="tanker">
                <div className="courses">
                  <Slider {...settings}>
                    {courses[category]?.data &&
                      courses[category].data.map((ele, index) => {
                        return (
                          <div key={index} style={{ margin: "0 0 5rem 0" }}>
                            <Card className="card-style">
                              <Card.Img
                                className="course-img"
                                src={ele.thumbnail}
                                style={{ height: "auto" }}
                                alt="course-img"
                              />
                              <Card.Body
                                style={{ height: "100%" }}
                                className="card-body-style"
                              >
                                <Card.Title>{ele.name}</Card.Title>
                                <Card.Text className="card-text-style">
                                  <>
                                    <span>{ele.rating}</span>
                                    <span>
                                      {getRatingStar(ele.rating).map((star) => {
                                        if (star === "zero") {
                                          return (
                                            <BiStar
                                              className="rating"
                                              size={20}
                                              style={{
                                                fill: "none",
                                                stroke: "#da7f4e",
                                                strokeWidth: 0.75,
                                              }}
                                            />
                                          );
                                        } else if (star === "half") {
                                          return (
                                            <BiSolidStarHalf
                                              className="rating"
                                              size={20}
                                              fill={"#da7f4e"}
                                            />
                                          );
                                        }
                                        return (
                                          <BiSolidStar
                                            className="rating"
                                            size={20}
                                            fill={"#da7f4e"}
                                          />
                                        );
                                      })}
                                    </span>
                                    <span className="enrolled">
                                      ({ele.learnerCount}+ Enrolled)
                                    </span>
                                  </>
                                </Card.Text>
                                <Card.Text className="card-text-style">
                                  {ele?.courses?.length > 1 && (
                                    <h5> {ele.courses.length} Courses </h5>
                                  )}
                                </Card.Text>

                                <Card.Text>
                                  {ele.prices.filter((p) => p.isDisplay)
                                    .length > 0 && (
                                    <b>
                                      {ele.prices.filter((p) => p.isDisplay)[0]
                                        ?.type !== "Free" ? (
                                        <div className="free-show">
                                        <span className="display-prop">
                                          <BiRupee size={20} />
                                          {
                                            ele.prices.filter(
                                              (p) => p.isDisplay
                                            )[0]?.discountedPrice
                                          }{" "}
                                          <strike className="display-prop">
                                            <BiRupee size={20} />
                                            {
                                              ele.prices.filter(
                                                (p) => p.isDisplay
                                              )[0]?.listPrice
                                            }
                                          </strike>
                                          </span>
                                          <span className="off-per-style">
                                          {calculateDiscountPercentage(
                                            ele.prices.filter(
                                              (p) => p.isDisplay
                                            )[0]?.discountedPrice,
                                            ele.prices.filter(
                                              (p) => p.isDisplay
                                            )[0]?.listPrice
                                          )}
                                          % off
                                          </span>
                                        </div>
                                      ) : (
                                        <>
                                          <div className="free-show">
                                          <span className="display-prop">
                                          <span className="display-prop"> <BiRupee size={20} />Free</span>
                                          <strike className="display-prop"> <BiRupee size={20} />Free</strike>
                                          </span>
                                          <span className="off-per-style">NaN Off</span>
                                          </div>
                                        </>
                                      )}
                                    </b>
                                  )}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      })}
                  </Slider>
                </div>
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default Section23;
