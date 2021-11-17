import { RootState } from "../../store";
import { TwetsState } from "./contracts/tweets";

export const selectTweet = (state: RootState): TwetsState => state.tweets;
export const selectTweetItem = (state: RootState) => selectTweet(state).items;
export const selectLoadingState = (state: RootState) => selectTweet(state).LoadingState;
export const selectAddTweetState = (state: RootState) => selectTweet(state).addTweetLoadingState;