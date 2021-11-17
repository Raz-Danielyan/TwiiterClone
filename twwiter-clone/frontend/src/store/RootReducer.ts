import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/Tweets/reducer";
import { TagsReducer } from "./ducks/tags/reducer";
import { tweetReducer } from "./ducks/Tweet/reducer";
import { userReducer } from "./ducks/User/reducer";


export const RootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: TagsReducer,
  user: userReducer
});