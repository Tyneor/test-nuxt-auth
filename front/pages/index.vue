<template>
  <div class="container">
    <div class="display-4 ma-4 d-flex justify-center">
      All videos
    </div>

    <div class="d-flex flex-wrap">
      <div v-for="video in videos" :key="video.name">
        <VideoListVideo :video="video"></VideoListVideo>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // async fetch({ store }) {
  //   await store.dispatch("loadAllVideos");
  // },
  computed: {
    ...mapState(["videos"]),
  },
};
</script>
