import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from 'services/shows/shows.type';
import { moviesSelector } from 'store/shows/shows.selector';
import { showsSlice } from 'store/shows/shows.slice';

export default function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(showsSlice.actions.setMovies);
  }, []);

  return (
    <>
      <h1>Movies list</h1>
      <ul>
        {movies && movies.map((show: Movie) => (
          <li key={show.id}>
            <h2>{show.title}</h2>
            <p>{show.director}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
