import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import {Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import GuidePage from './pages/GuidePage';
import GuidePageId from './pages/GuidePageId';

function App() {

  return (
    <>
      <Route path="/" exact component={MainPage}/>
      <Route path="/guide" exact component={GuidePage}/>
      <Route path="/guide/:id" component={GuidePageId}/>
    </>
  );
}

export default App;
