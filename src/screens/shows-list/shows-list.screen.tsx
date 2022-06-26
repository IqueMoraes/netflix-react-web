import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Show } from 'services/shows/shows.type';
import { listSelector, showDetailSelector } from 'store/shows/shows.selector';
import { showsSlice } from 'store/shows/shows.slice';

export default function ShowsList() {
  const dispatch = useDispatch();
  const list = useSelector(listSelector);
  const showDetail = useSelector(showDetailSelector);

  useEffect(() => {
    dispatch(showsSlice.actions.activateList());
    dispatch(showsSlice.actions.activateShowDetail({ showId: 7 }));
    console.log('list', list);
    console.log('showDetail', showDetail);
  }, []);

  return (
    <>
      <h1>Movies list</h1>
      <ul>
        {/* {list && list.map((show: Show) => <li>{show.title}</li>)} */}
        <li>aqui </li>
      </ul>
      {/* {showDetail && <h2>{showDetail.title}</h2>} */}
    </>
  );
}
