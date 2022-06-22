import { AxiosResponse } from 'axios';

export type AuthPayload = {
  email: string
  password: string
};

export type SignUpPayload = AuthPayload & { repeatPassword: string };

export type AuthResponse = AxiosResponse<{
  token: string
}>;

export type SignUpesponse = AxiosResponse<{
  id: number
  email: string
}>;

export enum AuthErrorMessage {
  UNREACHABLE_AUTHENTICATION = 'An error occurred on authentication proccess',
  UNREACHABLE_CREATION_USER = 'An error occurred on signinup user',
}
