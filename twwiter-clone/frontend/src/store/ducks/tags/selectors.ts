import { RootState } from "../../store";
import { TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags;
export const selectTagsItem = (state: RootState) => selectTags(state).items;
export const selectTagsLoadingState = (state: RootState) => selectTags(state).LoadingState;
