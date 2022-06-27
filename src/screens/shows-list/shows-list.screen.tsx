import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSlice } from 'store/shows/shows.slice';
import { Container } from '@mui/material';
import ShowsList from 'components/shows-list/shows-list';
import { listSelector, myListSelector } from 'store/shows/shows.selector';
import Header from 'components/header/header';

export default function Shows() {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = list.MOVIE;
  const tvShows = list.TV_SHOWS;

  useEffect(
    () => {
      dispatch(showsSlice.actions.activateList());
      dispatch(showsSlice.actions.activateMyList());
    },
    [],
  );

  return (
    <>
      <Header />
      <Container>
        <ShowsList
          autoplay
          width="95%"
          height="560px"
          arrows={false}
          shows={myList}
          slidesToShow={1}
          autoplaySpeed={2400}
        />
        {myList.length > 0 ? (
          <ShowsList shows={myList} title="Minha Lista" />
        ) : (
          <h4 style={{ color: '#fff', fontWeight: 'regular' }}>Minha lista: Você ainda não possui shows em sua lista.</h4>
        ) }
        { movies && <ShowsList shows={movies} title="Filmes" /> }
        { tvShows && <ShowsList shows={tvShows} title="Séries" /> }
      </Container>
    </>
  );
}
