import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route, Switch, } from 'react-router-dom';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Navigation />
    <Switch>
      <Route path='/' exact component={MovieList} />
      <Route path='/movies/2 , /movies/3' exact component={Movie} />
    </Switch>
      </div>
    </div>
  );
};

export default App;
