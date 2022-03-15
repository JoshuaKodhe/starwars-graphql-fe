import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './PeoplePage/people';

import PersonPage from './PersonPage';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<People />} />
        <Route path='details/:name' element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
