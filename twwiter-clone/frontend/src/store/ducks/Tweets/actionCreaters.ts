import { LoadingState } from "../User/contracts/user";
import { AddTweetsActionInterface, FetchTweetsActionInterface, FetchTweetsAddActionInterface, RemoveTweetsActionInterface, SetAddTweetsLoadingStateActionInterface, SetTweetsActionInterface, SetTweetsLoadingStateActionInterface, TweetsActionType } from "./contracts/ActionType";
import { Tweet, TwetsState } from "./contracts/tweets";



export const setTwets = (payload: TwetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const FetchAddTweets = (payload: { text: string, image: string[] }): FetchTweetsAddActionInterface => ({
  type: TweetsActionType.FETCH_ADD_TWEETS,
  payload,
});

export const AddTweets = (payload: Tweet): AddTweetsActionInterface => ({
  type: TweetsActionType.ADD_TWEETS,
  payload,
});

export const setTwetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload
});

export const setTwetsAddLoadingState = (payload: LoadingState): SetAddTweetsLoadingStateActionInterface => ({
  type: TweetsActionType.SET_ADD_FROM_STATE,
  payload
});

export const FetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
});

export const RemoveTwetsAddLoadingState = (payload: string): RemoveTweetsActionInterface => ({
  type: TweetsActionType.REMOVE_TWEETS,
  payload
});

export type TweetsAction =
  SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchTweetsActionInterface
  | SetTweetsActionInterface
  | FetchTweetsAddActionInterface
  | AddTweetsActionInterface
  | SetAddTweetsLoadingStateActionInterface
  | RemoveTweetsActionInterface;