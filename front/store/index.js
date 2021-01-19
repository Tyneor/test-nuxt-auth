export const state = () => ({
  videos: [],
  currentVideo: {},
  snackbars: [],
});

export const mutations = {
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  },

  SET_CURRENT_VIDEO(state, video) {
    state.currentVideo = video;
  },

  ADD_SNACKBAR(state, snackbar) {
    state.snackbars = state.snackbars.concat(snackbar);
  },

  REMOVE_SNACKBAR(state, index) {
    state.snackbars.splice(index, 1);
  },
};

export const actions = {
  async loadAllVideos({ commit }) {
    const { data: videos } = await this.$axios.get("/videos");
    commit("SET_VIDEOS", videos);
  },

  addSnackbar({ commit }, snackbar) {
    snackbar.showing = true;
    commit("ADD_SNACKBAR", snackbar);
  },

  removeSnackbar({ commit }, index) {
    commit("REMOVE_SNACKBAR", index);
  },
};
