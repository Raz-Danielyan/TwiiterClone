import produce, { Draft } from 'immer';
import { LoadingState } from '../User/contracts/user';
import { TweetsAction } from './actionCreaters';
import { TweetsActionType } from './contracts/ActionType';
import { TwetsState } from './contracts/tweets';

const initialTweetsState: TwetsState = {
  items: [],
  addTweetLoadingState: LoadingState.NEVER,
  LoadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TwetsState>, action: TweetsAction) => {
  switch (action.type) {
    case TweetsActionType.SET_TWEETS:
      draft.items = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;
    case TweetsActionType.FETCH_TWEETS:
      draft.items = [];
      draft.LoadingState = LoadingState.LOADING;
      break;
    case TweetsActionType.FETCH_ADD_TWEETS:
      draft.addTweetLoadingState = LoadingState.LOADING;
      break;
    case TweetsActionType.REMOVE_TWEETS:
      draft.items = draft.items.filter(obj => obj._id !== action.payload);
      break;
    case TweetsActionType.ADD_TWEETS:
      draft.items.unshift(action.payload);
      draft.addTweetLoadingState = LoadingState.LOADED;
      break;
    case TweetsActionType.SET_ADD_FROM_STATE:
      draft.addTweetLoadingState = action.payload;
      break;
    case TweetsActionType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialTweetsState);