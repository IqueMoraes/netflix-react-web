import axiosInstance from 'modules/axios/axios.module';
import { AuthPayload, SignUpPayload } from './user.type';

const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/login', payload);

  const signUp = (payload: SignUpPayload) => axiosInstance.post('/user', payload);

  return {
    auth,
    signUp,
  };
};

export default userService;
