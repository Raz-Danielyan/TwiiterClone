import produce, { Draft } from 'immer';
import { UserAction } from './actionCreaters';
import { UserActionType } from './contracts/actionType';
import { LoadingState, UserState } from './contracts/user';

const initialUserState: UserState = {
  data: undefined,
  LoadingState: LoadingState.NEVER
}

export const userReducer = produce((draft: Draft<UserState>, action: UserAction) => {
  switch (action.type) {
    case UserActionType.SET_USER_DATA:
      draft.data = action.payload;
      draft.LoadingState = LoadingState.LOADED;
      break;
    case UserActionType.FETCH_USER_DATA:
      draft.data = undefined;
      draft.LoadingState = LoadingState.LOADING_FOR_AUTIFICAIRATION;
      break;
    case UserActionType.REMOVE_USER:
      draft.data = undefined;
      draft.LoadingState = LoadingState.ERROR;
      break;
    case UserActionType.FETCH_USER_SINGUP_DATA:
      draft.data = undefined;
      draft.LoadingState = LoadingState.LOADING_FOR_AUTIFICAIRATION;
      break;
    case UserActionType.FETCH_USER_GETME:
      draft.data = undefined;
      draft.LoadingState = LoadingState.LOADING;
      break;
    case UserActionType.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
  }
}, initialUserState);