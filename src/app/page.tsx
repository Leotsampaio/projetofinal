"use client"
import React from "react";
import { Nav } from "./_components/nav"
import { Home } from './_components/home';
import { Footer } from "./_components/footer";
import { Cards } from './_components/cards'
import { Contato } from "./_components/contato";
export default function Homepage() {
  return (

    <body>
      <header>
        <Nav />
      </header>
      <Home />
      <Cards />
      <Contato />
      <footer>
        <Footer />
      </footer>
    </body>
  );
}