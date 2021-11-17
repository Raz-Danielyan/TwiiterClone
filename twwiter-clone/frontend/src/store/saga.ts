import { all } from "@redux-saga/core/effects";
import { TweetsSaga } from "./ducks/Tweets/sagas";
import { TagsSaga } from "./ducks/tags/sagas";
import { TweetSaga } from "./ducks/Tweet/sagas";
import { UserSaga } from "./ducks/User/sagas";

export default function* rootSaga() {
  yield all([
    TweetsSaga(),
    TweetSaga(),
    TagsSaga(),
    UserSaga()
  ]);
}