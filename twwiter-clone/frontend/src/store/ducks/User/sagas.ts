import { takeEvery, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../servaices/api/tweetsApi';
import { setUser, setUserLoadingState } from './actionCreaters';
import { FetchUserActionInterface, FetchUserSingUpActionInterface, UserActionType } from './contracts/actionType';
import { LoadingState, UserStateData } from './contracts/user';


export function* fetchUserRequest({ payload: postData }: FetchUserActionInterface) {
  try {
    let items: UserStateData = yield call(TweetsApi.signIn, postData);
    window.localStorage.setItem('token', items?.token || "123");
    yield put(setUser(items));
  }
  catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* fetchUserSingUpRequest({ payload: postData }: FetchUserSingUpActionInterface) {
  try {
    let items: UserStateData = yield call(TweetsApi.signUp, postData);
    yield put(setUser(items));
  }
  catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* fetchUserGetMeRequest() {
  try {
    let items: UserStateData = yield call(TweetsApi.getMe);
    yield put(setUser(items));
  }
  catch (e) {
    yield put(setUserLoadingState(LoadingState.ERROR));
  }
}

export function* UserSaga() {
  yield takeEvery(UserActionType.FETCH_USER_DATA, fetchUserRequest);
  yield takeEvery(UserActionType.FETCH_USER_SINGUP_DATA, fetchUserSingUpRequest);
  yield takeEvery(UserActionType.FETCH_USER_GETME, fetchUserGetMeRequest);
}