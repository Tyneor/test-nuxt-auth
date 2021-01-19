<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  fetch: async ({ $axios, params: { id }, store }) => {
    const { data } = await $axios.get(`/videos/${id}`);
    store.commit("SET_CURRENT_VIDEO", data);
  },
  computed: {
    ...mapState({
      video: "currentVideo",
    }),
  },
  head() {
    return {
      titleTemplate: `%s ${this.video.name}`,
    };
  },
};
</script>

<style></style>
