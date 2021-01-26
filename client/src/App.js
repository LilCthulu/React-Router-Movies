import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch, } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  console.log(movieList)
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
      <Route exact path= '/'>
        <MovieList movies= {movieList} title= {movieList.title} director= {movieList.director} metascore= {movieList.metascore}/>
      </Route>
    </Switch>
    </div>
  );
}
