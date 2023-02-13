import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TypographyPage from '../pages/Text-based/TypographyPage';
import ButtonPage from '../pages/Buttons/ButtonPage';
import RadioButtonPage from '../pages/Buttons/RadioButtonPage';
import TextFieldPage from '../pages/Text-based/TextFieldPage';
import SelectPage from '../pages/Text-based/SelectPage';
import CheckmarkPage from '../pages/CheckmarkPage';
import NavbarLayout from '../components/layouts/navbar';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <TypographyPage />,
      },
      {
        path: routes.ButtonPage,
        element: <ButtonPage />,
      },
      {
        path: routes.CheckmarksPage,
        element: <CheckmarkPage />,
      },
      {
        path: routes.RadioButtonsPage,
        element: <RadioButtonPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <TextFieldPage />,
      },
      {
        path: routes.SelectPage,
        element: <SelectPage />,
      },
    ],
  },
]);

export default router;
