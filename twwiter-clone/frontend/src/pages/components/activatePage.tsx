import React from 'react'
import { useDispatch } from 'react-redux';
import { axios } from '../../core/axios';
import { setUserLoadingState, setUser } from '../../store/ducks/User/actionCreaters';
import { LoadingState } from '../../store/ducks/User/contracts/user';

export const ActivatePage: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setUserLoadingState(LoadingState.LOADING));
    const hash = window.location.pathname.split('/').pop();
    axios.get('/auth/verify?hash=' + hash).then(({ data }) => {
      const { _id, email, fullname, username, tweets, createdAt, updatedAt, token } = data.data;
      dispatch(setUser({ _id, email, fullname, username, tweets, createdAt, updatedAt }));
      window.localStorage.setItem('token', token);
    }).catch(() => {
      dispatch(setUserLoadingState(LoadingState.ERROR));
    });
  }, [dispatch]);
  return null;
}
