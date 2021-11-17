import { takeEvery, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../servaices/api/tweetsApi';
import { Tweet } from '../Tweets/contracts/tweets';
import { LoadingState } from '../User/contracts/user';
import { setTweet, setTweetLoadingState } from './actionCreaters';
import { FetchTweetActionInterface, TweetActionType } from './contracts/actionType';


export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
  try {
    let items: Tweet = yield call(TweetsApi.fetchTweet, tweetId);
    yield put(setTweet(items));
  }
  catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* TweetSaga() {
  yield takeEvery(TweetActionType.FETCH_TWEET_DATA, fetchTweetRequest);
}