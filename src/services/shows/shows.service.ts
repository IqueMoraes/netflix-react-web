import axiosInstance from 'modules/axios/axios.module';
// import { ShowsData } from './shows.type';

const showsService = () => {
  const allShowslist = () => axiosInstance.get('/shows');

  return {
    allShowslist,
  };
};

export default showsService;
