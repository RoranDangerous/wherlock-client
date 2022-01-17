import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import { GamePage } from './pages/Game';

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:code" element={<GamePage />} />
    </Routes>
  </BrowserRouter>
);
