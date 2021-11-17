import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps.js';
import NewMeetupPage from './pages/NewMeetUp.js';
import FavoritesPage from './pages/Favorites.js';
import Layout from './components/layout/Layout';
//import MainNavigation from './components/layout/MainNavigation.js'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route exact path='/new-meetup' element={<NewMeetupPage />} />
        <Route exact path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
  }
export default App;
