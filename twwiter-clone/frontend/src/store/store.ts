import { applyMiddleware, compose, createStore } from "redux";
import { RootReducer } from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import { TagsState } from "./ducks/tags/contracts/state";
import { TweetState } from "./ducks/Tweet/contracts/tweets";
import { TwetsState } from "./ducks/Tweets/contracts/tweets";
import { UserState } from "./ducks/User/contracts/user";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMidleWere = createSagaMiddleware();


export interface RootState {
  tweets: TwetsState;
  tags: TagsState;
  tweet: TweetState;
  user: UserState;
}

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMidleWere)));

sagaMidleWere.run(rootSaga);
