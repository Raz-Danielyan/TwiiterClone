import { Action } from "redux";
import { LoadingState } from "../../User/contracts/user";
import { Tweet, TwetsState } from "./tweets";

export enum TweetsActionType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  FETCH_ADD_TWEETS = 'tweets/FETCH_ADD_TWEETS',
  ADD_TWEETS = 'tweets/ADD_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  SET_ADD_FROM_STATE = 'tweets/SET_ADD_FROM_STATE',
  REMOVE_TWEETS = 'tweets/REMOVE_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS,
  payload: TwetsState['items']
}

export interface RemoveTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.REMOVE_TWEETS,
  payload: string
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE,
  payload: LoadingState
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE,
  payload: LoadingState
}
export interface SetAddTweetsLoadingStateActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_ADD_FROM_STATE,
  payload: LoadingState
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS,
}

export interface FetchTweetsAddActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_ADD_TWEETS,
  payload: { text: string, image: string[] },
}
export interface AddTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.ADD_TWEETS,
  payload: Tweet,
}