import axiosInstance from 'modules/axios/axios.module';
import { useSelector } from 'react-redux';
import { tokenSelector } from 'store/user/user.selector';
// import { ShowsData } from './shows.type';

const episodesService = () => {
  const getList = (showId: string) => axiosInstance
    .get(`/episodes/${showId}`, {
      headers: {
        Authorization: `Bearer ${useSelector(tokenSelector)}`,
      },
    });

  return {
    getList,
  };
};

export default episodesService;
