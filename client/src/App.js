import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

        <Route path="/">
          <SavedList list={savedList} />
          </Route>
        <Route exact path="/movies-list/"
        render={props => (
        <MovieList
            movies={savedList}
            {...props}
        />
        )}
        />

        <Route
            path="/movies-list/:id/"
            render={props => <Movie {...props} addToSavedList={addToSavedList}/>}
        />

        </div>
  );
};

export default App;
