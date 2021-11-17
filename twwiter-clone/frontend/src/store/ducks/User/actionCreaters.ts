import { LoginFormProps } from "../../../pages/components/LoginModal";
import { RegisterFormProps } from "../../../pages/components/RegisterModal";
import { FetchUserActionInterface, FetchUserGetMeActionInterface, FetchUserSingUpActionInterface, RemoveUserActionInterface, SetUserActionInterface, SetUserLoadingStateActionInterface, UserActionType } from "./contracts/actionType";
import { LoadingState, UserStateData } from "./contracts/user";



export const setUser = (payload: UserStateData): SetUserActionInterface => ({
  type: UserActionType.SET_USER_DATA,
  payload,
});

export const setUserLoadingState = (payload: LoadingState): SetUserLoadingStateActionInterface => ({
  type: UserActionType.SET_LOADING_STATE,
  payload
});

export const FetchUser = (payload: LoginFormProps): FetchUserActionInterface => ({
  type: UserActionType.FETCH_USER_DATA,
  payload,
});

export const FetchUserSingUp = (payload: RegisterFormProps): FetchUserSingUpActionInterface => ({
  type: UserActionType.FETCH_USER_SINGUP_DATA,
  payload,
});

export const FetchUserGetMe = (): FetchUserGetMeActionInterface => ({
  type: UserActionType.FETCH_USER_GETME,
});

export const RemoveUserGetMe = (): RemoveUserActionInterface => ({
  type: UserActionType.REMOVE_USER,
});

export type UserAction =
  SetUserActionInterface
  | SetUserLoadingStateActionInterface
  | FetchUserActionInterface
  | FetchUserSingUpActionInterface
  | FetchUserGetMeActionInterface
  | RemoveUserActionInterface;