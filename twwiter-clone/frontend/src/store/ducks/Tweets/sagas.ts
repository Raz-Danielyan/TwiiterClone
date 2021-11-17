import { takeEvery, call, put, takeLeading } from 'redux-saga/effects';
import { TweetsApi } from '../../../servaices/api/tweetsApi';
import { LoadingState } from '../User/contracts/user';
import { AddTweets, setTwets, setTwetsAddLoadingState, setTwetsLoadingState } from './actionCreaters';
import { FetchTweetsAddActionInterface, RemoveTweetsActionInterface, TweetsActionType } from './contracts/ActionType';
import { Tweet, TwetsState } from './contracts/tweets';


export function* fetchTweetsRequest() {
  try {
    const userId = window.location.pathname.includes('/user') ? window.location.pathname.split('/').pop() : undefined;
    let items: TwetsState['items'] = yield call(TweetsApi.fetchTweets, userId);
    yield put(setTwets(items));
  }
  catch (e) {
    yield put(setTwetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetsRequest({ payload }: FetchTweetsAddActionInterface) {
  try {
    let items: Tweet = yield call(TweetsApi.fetchAddTweet, payload);
    yield put(AddTweets(items));
  }
  catch (e) {
    yield put(setTwetsAddLoadingState(LoadingState.ERROR));
  }
};

export function* fetchRemoveTweetsRequest({ payload }: RemoveTweetsActionInterface) {
  try {
    yield call(TweetsApi.fetchRemoveTweet, payload);
  }
  catch (e) {
    alert('We can`t remove this tweet');
  }
};

export function* TweetsSaga() {
  yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLeading(TweetsActionType.FETCH_ADD_TWEETS, fetchAddTweetsRequest);
  yield takeLeading(TweetsActionType.REMOVE_TWEETS, fetchRemoveTweetsRequest);
}