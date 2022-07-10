import { SET_VIDEOS, SET_SELECTED, SET_SEARCH, SET_DETAILS } from "./types";

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

export const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,
});