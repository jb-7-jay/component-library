export default {
  defaultChangelogFunctions: null,

  getReleaseLine: async (changeset) => {
    return changeset.summary.trim();
  },

  getDependencyReleaseLine: async () => {
    return "";
  },
};
