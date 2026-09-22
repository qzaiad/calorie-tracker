/**
 * Application entry point.
 *
 * Mounts the React tree into #root and performs the one-time global setup
 * (CSS reset + react-modal accessibility element).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Modal from "react-modal";

// Tell react-modal which element is the app root so it can apply
// aria-hidden / focus management to the rest of the page while open.
// MUST BE CALLED ONLY ONCE
Modal.setAppElement("#root");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
