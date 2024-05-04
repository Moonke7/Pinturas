import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import PinturasPage from './Pages/Page_Pic/PinturasPage';
import { PinturaProvider } from './globalContext'; // Importa el PinturaProvider
import PageBio from './Pages/Page_Bio/PageBio';
import Contact from './Pages/Page_Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  { 
    path: '/Obras/',
    element: <PinturasPage/>
  },
  {
    path: "/Bio",
    element: <PageBio/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
])

//Buscador  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PinturaProvider>
    <RouterProvider router={router}/>
  </PinturaProvider>
);

