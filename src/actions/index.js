import { SET_VIDEOS, SET_SEARCH } from "./types";

export const setVideos = (payload) => ({
  type: SET_VIDEOS,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});
