import { RootState } from "../../store";
import { UserState } from "./contracts/user";

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserItem = (state: RootState) => selectUser(state)?.data;
export const selectUserForAutification = (state: RootState): boolean => !!selectUser(state)?.data;
export const selectUserLoadingState = (state: RootState) => selectUser(state).LoadingState;