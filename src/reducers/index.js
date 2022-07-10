/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { SET_VIDEOS, SET_SEARCH, SET_SELECTED, SET_DETAILS } from "../actions/types";

const initialState = {
  videos: [],
  selected: "",
  search: "",
  details: [],
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return { ...state, videos: action.payload };
    case SET_SELECTED:
      return { ...state, selected: action.payload };
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
