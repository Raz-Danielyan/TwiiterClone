import { Tweet } from "../../Tweets/contracts/tweets";
import { LoadingState } from "../../User/contracts/user";

export interface TweetState {
  data?: Tweet;
  LoadingState: LoadingState
} 