"use client"
import React from "react";
import { Nav } from "./_components/nav"
import { Home } from './_components/home';
import { Footer } from "./_components/footer";
import { Slider, SliderProps, Slide } from './_components/slider'
import styles from '~/styles/funcionalidades.module.css'
export default function Homepage() {
  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    }
  };
  const data = [
    { id: 1, image: "/images/building.jpg", texto: 'Slide 1' },
    { id: 2, image: "/images/building.jpg", texto: 'Slide 2' },
    { id: 3, image: "/images/building.jpg", texto: 'Slide 3' },
    { id: 4, image: "/images/building.jpg", texto: 'Slide 4' },
  ];

  return (

    <body>
      <header>
        <Nav />
      </header>
      <Home />

      <Slider settings={settings} >
        {data.map((item) => (
          <Slide key={item.id} className={styles.slideFunc}>
            <img src={item.image} alt='imagem' ></img>
            <p>{item.texto}</p>
          </Slide>
        ))}
      </Slider>
      <footer>
          <Footer />
      </footer>
    </body>
  );
}