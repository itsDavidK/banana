import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createHashRouter, RouterProvider } from 'react-router-dom';
import PocketBook from './pages/portfolio/PocketBook/PocketBook';
import Portfolio from './pages/portfolio/Portfolio/Portfolio';
import Reviews from './pages/reviews/Reviews';
import AboutUs from './pages/about-us/AboutUs';
import Home from './pages/home/Home';

import './styles/main.scss';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pocketbook',
    element: <PocketBook />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
