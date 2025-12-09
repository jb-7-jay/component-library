module.exports = {
  defaultChangelogFunctions: null,

  getReleaseLine: async (changeset, type) => {
    const summary = changeset.summary.trim();

    return `${summary}`;
  },

  getDependencyReleaseLine: async () => {
    return "";
  },
};
