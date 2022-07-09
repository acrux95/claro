import { SET_VIDEOS, SET_SEARCH, SET_SELECTED } from "../actions/types";

const initialState = {
  videos: [],
  selected: [],
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload}
    case SET_SELECTED:
      return { ...state, selected: action.payload}
  default:
    return state
  }
};