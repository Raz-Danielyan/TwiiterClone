import { Action } from "redux";
import { Tweet } from "../../Tweets/contracts/tweets";
import { LoadingState } from "../../User/contracts/user";

export enum TweetActionType {
  SET_TWEET_DATA = 'tweets/SET_TWEET_DATA',
  FETCH_TWEET_DATA = 'tweets/FETCH_TWEET_DATA',
  CLEAR_TWEET_DATA = "tweets/CLEAR_TWEET_DATA",
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetActionInterface extends Action<TweetActionType> {
  type: TweetActionType.SET_TWEET_DATA,
  payload: Tweet
}
export interface ClearTweetActionInterface extends Action<TweetActionType> {
  type: TweetActionType.CLEAR_TWEET_DATA,
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionType> {
  type: TweetActionType.SET_LOADING_STATE,
  payload: LoadingState
}


export interface FetchTweetActionInterface extends Action<TweetActionType> {
  type: TweetActionType.FETCH_TWEET_DATA,
  payload: string,
}