import React from 'react';
import { Nav } from "./_components/nav";
import { Home } from './_components/home';
import { Funcionalidades } from "./_components/slider/funcionalidades";

export default function Homepage() {
    return (
        <body>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet"></link>
                <Nav />
            </head>
            <Home />
            <Funcionalidades />
        </body>
    );
}
