import { takeEvery, call, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../servaices/api/tweetsApi';
import { LoadingState } from '../User/contracts/user';
import { setTags, setTagsLoadingState, TagsActionType } from './actionCreaters';
import { TagsState } from './contracts/state';


export function* fetchTagsRequest() {
  try {
    let items: TagsState['items'] = yield call(TweetsApi.fetchTags);
    yield put(setTags(items));
  }
  catch (e) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* TagsSaga() {
  yield takeEvery(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}