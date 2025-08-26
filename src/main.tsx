import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AlturaRealtyApp } from './main/app/AlturaRealtyApp';
import "./scss/main.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AlturaRealtyApp />
    </BrowserRouter>
  </StrictMode>,
)
