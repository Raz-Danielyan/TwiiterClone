import { Tweet } from "../Tweets/contracts/tweets";
import { LoadingState } from "../User/contracts/user";
import { ClearTweetActionInterface, FetchTweetActionInterface, SetTweetActionInterface, SetTweetLoadingStateActionInterface, TweetActionType } from "./contracts/actionType";



export const setTweet = (payload: Tweet): SetTweetActionInterface => ({
  type: TweetActionType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
  type: TweetActionType.SET_LOADING_STATE,
  payload
});
export const clearTweet = (): ClearTweetActionInterface => ({
  type: TweetActionType.CLEAR_TWEET_DATA,
});
export const FetchTweet = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionType.FETCH_TWEET_DATA,
  payload,
});

export type TweetAction =
  SetTweetActionInterface
  | SetTweetLoadingStateActionInterface
  | FetchTweetActionInterface
  | ClearTweetActionInterface;