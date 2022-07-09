import { SET_VIDEOS, SET_SELECTED, SET_SEARCH } from "./types";

export const setVideos = (payload) => ({
  type: SET_VIDEOS,
  payload,
});

export const setSelected = (payload) => ({
  type: SET_SELECTED,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});
