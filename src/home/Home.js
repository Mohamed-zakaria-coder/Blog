import React from "react";
import "../blog.css/home.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "../blog.css/home.css";
import Data from "../Data.json";
import { NavLink } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="home-container">
      <Carousel infiniteLoop useKeyboardArrows={true} autoPlay showThumbs={false} className="home">
        {Data.sections.map((section) => {
          return (
            <div key={section.id}>
              <div className="img-parent">
                <img
                  src={section.img}
                  alt={section.name}
                  onClick={() => props.filterData(section.id)}
                />
                <p className="legend">{section.name}</p>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div className="box-parent">
        {Data.blogs.map((blog) => {
          return (
            <div className="box" key={blog.id}>
              <div className="img-parent">
                <NavLink to='description'>
                <img src={blog.img} alt={blog.description} onClick={() => props.handleData(blog.id)}/>
                </NavLink>
              </div>
              <p>{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
