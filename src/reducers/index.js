import { SET_VIDEOS, SET_SEARCH } from "../actions/types";

const initialState = {
  videos: [],
  search: '',
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload}
    case SET_SEARCH:
      return { ...state, search: action.payload}
  default:
    return state
  }
};