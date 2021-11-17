import produce, { Draft } from 'immer';
import { LoadingState } from '../User/contracts/user';
import { TagsAction, TagsActionType } from './actionCreaters';
import { TagsState } from './contracts/state';

const initialTagsState: TagsState = {
  items: [],
  LoadingState: LoadingState.NEVER
}

export const TagsReducer = produce((draft: Draft<TagsState>, action: TagsAction) => {
  switch (action.type) {
    case TagsActionType.SET_TAGS:
      draft.items = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;
    case TagsActionType.FETCH_TAGS:
      draft.items = [];
      draft.LoadingState = LoadingState.LOADING;
      break;
    case TagsActionType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialTagsState);