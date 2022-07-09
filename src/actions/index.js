import { SET_VIDEOS, SET_SELECTED } from "./types";

export const setVideos = (payload) => ({
  type: SET_VIDEOS,
  payload,
});

export const setSelected = (payload) => ({
  type: SET_SELECTED,
  payload,
});
