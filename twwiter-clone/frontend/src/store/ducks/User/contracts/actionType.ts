import { Action } from "redux";
import { LoginFormProps } from "../../../../pages/components/LoginModal";
import { RegisterFormProps } from "../../../../pages/components/RegisterModal";
import { UserStateData, LoadingState } from "./user";

export enum UserActionType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
  FETCH_USER_SINGUP_DATA = 'user/FETCH_USER_SINGUP_DATA',
  FETCH_USER_GETME = 'user/FETCH_USER_GETME',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  REMOVE_USER = 'user/REMOVE_USER',
}

export interface SetUserActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_USER_DATA,
  payload: UserStateData
};

export interface RemoveUserActionInterface extends Action<UserActionType> {
  type: UserActionType.REMOVE_USER
};

export interface SetUserLoadingStateActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_LOADING_STATE,
  payload: LoadingState
}


export interface FetchUserActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_USER_DATA,
  payload: LoginFormProps,
};

export interface FetchUserSingUpActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_USER_SINGUP_DATA,
  payload: RegisterFormProps,
};

export interface FetchUserGetMeActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_USER_GETME
};