import produce, { Draft } from 'immer';
import { LoadingState } from '../User/contracts/user';
import { TweetAction } from './actionCreaters';
import { TweetActionType } from './contracts/actionType';
import { TweetState } from './contracts/tweets';

const initialTweetState: TweetState = {
  data: undefined,
  LoadingState: LoadingState.NEVER
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetAction) => {
  switch (action.type) {
    case TweetActionType.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;
    case TweetActionType.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.LoadingState = LoadingState.LOADING;
      break;
    case TweetActionType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
    case TweetActionType.CLEAR_TWEET_DATA:
      draft.data = undefined
      draft.LoadingState = LoadingState.NEVER;
      break;
  }
}, initialTweetState);