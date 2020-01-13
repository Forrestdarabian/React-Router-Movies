import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import  MovieList from './Movies/MovieList';
import Movie from './Movies/Movie.js'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      
    
      <Route path='/' exact component={MovieList} />
      <Route exact path="/movies/:id" render={(props)=>{
        return(
          <Movie {...props}/>
        )
      }} /> 
    
      </div>
    </div>
  );
};

export default App;
