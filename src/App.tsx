import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/common.scss'
import './styles/headerNav.scss'
import './styles/list.scss'
import './styles/searchCriteria.scss'
import './styles/slider.scss'

import { BoxedArrowLeft } from './icons/criteria';
import HeaderNav from './components/HeaderNav';
import { SearchCriteria } from './components/SearchCriteria';

function App() {
  return (
    <div >
      <HeaderNav />
      <SearchCriteria />
    </div>
  );
}

export default App;
