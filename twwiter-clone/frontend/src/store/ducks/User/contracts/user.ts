export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  LOADING_FOR_AUTIFICAIRATION = 'LOADING_FOR_AUTIFICAIRATION',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface UserStateData {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  password?: string;
  confirmed_hash?: string;
  confirmed?: boolean;
  token?: string;
  tweets: string[];
  updatedAt: string;
  createdAt: string;
}

export interface UserState {
  data?: UserStateData;
  LoadingState: LoadingState
}