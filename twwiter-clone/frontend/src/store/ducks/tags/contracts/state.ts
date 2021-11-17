import { LoadingState } from "../../User/contracts/user";

export interface Tags {
  _id: string;
  name: string;
  count: number;
}

export interface TagsState {
  items: Tags[];
  LoadingState: LoadingState
}