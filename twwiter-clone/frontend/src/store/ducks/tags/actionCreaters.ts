import { Action } from "redux";
import { LoadingState } from "../User/contracts/user";
import { TagsState } from "./contracts/state";

export enum TagsActionType {
  SET_TAGS = 'tags/SET_TAGS',
  FETCH_TAGS = 'tags/FETCH_TAGS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_TAGS,
  payload: TagsState['items']
}

export interface SetTagsLoadingStateActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_LOADING_STATE,
  payload: LoadingState
}


export interface FetchTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.FETCH_TAGS,
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
  type: TagsActionType.SET_TAGS,
  payload,
});

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateActionInterface => ({
  type: TagsActionType.SET_LOADING_STATE,
  payload
});

export const FetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionType.FETCH_TAGS,
});

export type TagsAction =
  SetTagsActionInterface
  | SetTagsLoadingStateActionInterface
  | FetchTagsActionInterface;