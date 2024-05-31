import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './Project1.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminDashboard from '../../assets/Project1Pics/AdminDashboard.png'
import Home from '../../assets/Project1Pics/Home.png'
import LandingPage from '../../assets/Project1Pics/LandingPage.png'

const images = [
  LandingPage,
  Home,
  AdminDashboard,
];

const Project1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.project}>
      <div className={styles.content}>
      <div className={styles.slider}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={image} alt={`Project Image ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.projectDescription}>
        <h2>Real Estate Project_</h2>
        <p>Leadership, Design, and Frontend Development for a web application for a real estate company with 15 years of experience</p>
      </div>
      </div>
      <div className={styles.projectLinks}>
        <a href="https://vimeo.com/952367284" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <FontAwesomeIcon icon={faVimeo} size="3x" />
        </a>
        <a href="https://full-stack-project-front.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.liveDemoButton}>
          <FontAwesomeIcon icon={faPlayCircle} size="1x" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default Project1;