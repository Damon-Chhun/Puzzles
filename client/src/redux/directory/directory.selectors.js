import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectoryCollections = createSelector(
  [selectDirectory],
  directory => directory.collections
);
