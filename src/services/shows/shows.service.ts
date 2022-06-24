import axiosInstance from 'modules/axios/axios.module';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'store/user/user.selector';
// import { ShowsData } from './shows.type';

const showsService = () => {
  const allShowslist = () => axiosInstance
    .get('/shows', {
      headers: {
        Authorization: `Bearer ${useSelector(tokenSelector)}`,
      },
    });

  const showDetail = (showId: string) => axiosInstance
    .get(`/shows/${showId}`, {
      headers: {
        Authorization: `Bearer ${useSelector(tokenSelector)}`,
      },
    });

  return {
    allShowslist,
    showDetail,
  };
};

export default showsService;
