import Header from 'components/header/header';
import Item from 'components/shows-list/components/item/item';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Episodes, Show } from 'services/shows/shows.type';
import { showDetailSelector } from 'store/shows/shows.selector';
import { showsSlice } from 'store/shows/shows.slice';

export default function OneSingleShow() {
  const param = useParams();
  const dispatch = useDispatch();
  const showDetail = useSelector(showDetailSelector) as Show;

  useEffect(
    () => {
      dispatch(showsSlice.actions.activateShowDetail({ showId: +param }));
    },
    [],
  );

  return (
    <>
      <Header />
      {showDetail ? (
        <>
          <div>
            capa
          </div>
          <h1>{showDetail.title}</h1>
          <p>{showDetail.description}</p>
          <p>Direção:</p>
          <p>{showDetail.director}</p>
          <button type="button">Adicinar à minha lista</button>

          {showDetail.episodes && (
            <>
              <h2>Episódios</h2>
              <ul>
                {showDetail.episodes.map((ep: Episodes) => (
                  <li key={ep.id}>
                    <Item
                      id={ep.id}
                      cover={ep.cover}
                      width="422px"
                      height="260px"
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <h1 style={{ color: '#fff' }}>Erro ao carregar a página do show. Tente novamente.</h1>
          <Link to="/">Retornar ao catálogo.</Link>
        </>
      )}
    </>
  );
}
