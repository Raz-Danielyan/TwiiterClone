import { LoadingState, UserStateData } from "../../User/contracts/user";

export interface Tweet {
  _id: string;
  text: string;
  createdAt: string;
  images: string[];
  user: UserStateData;
}

export interface TwetsState {
  items: Tweet[];
  LoadingState: LoadingState,
  addTweetLoadingState: LoadingState,
}