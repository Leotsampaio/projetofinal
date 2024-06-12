import React from 'react';
import { Nav } from "./_components/nav"
import { Home } from './_components/home';
import { Funcionalidades } from "./_components/funcionalidades"
export default function Homepage() {
  return (
    <body>
      <header>
        <Nav />
      </header>
      <Home />
      <Funcionalidades />
    </body>
  );
}