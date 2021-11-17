import { RootState } from "../../store";
import { TweetState } from "./contracts/tweets";

export const selectTweet = (state: RootState): TweetState => state.tweet;
export const selectTweetItem = (state: RootState) => selectTweet(state).data;
export const selectTweetLoadingState = (state: RootState) => selectTweet(state).LoadingState;