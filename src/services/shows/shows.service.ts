import axiosInstance from 'modules/axios/axios.module';
import { Props, ShowIdPayload } from './shows.type';

const showsService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const showslist = () => axiosInstance
    .get('/shows', config);

  const showDetail = (showId: ShowIdPayload) => axiosInstance
    .get(`/shows/${showId.showId}`, config);

  const myList = () => axiosInstance
    .get('/list', config);

  const addShowToMyList = (showId: ShowIdPayload) => axiosInstance
    .post('/list', {
      ...config,
      data: {
        showId: `${showId}`,
      },
    });

  const removeShowFromMyList = (payload: ShowIdPayload) => axiosInstance
    .delete(`/list/${payload.showId}`, config);

  return {
    showslist,
    showDetail,
    myList,
    addShowToMyList,
    removeShowFromMyList,
  };
};

export default showsService;
