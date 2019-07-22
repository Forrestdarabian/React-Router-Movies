import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route, Switch, } from 'react-router-dom';
import { MovieList, } from './Movies/MovieList';


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
      <Route exact path="/movies/ :id" component={Movie} /> 
    </Switch>
      </div>
    </div>
  );
};

export default App;
