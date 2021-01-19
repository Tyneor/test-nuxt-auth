<template>
  <div>
    <h1>Videos</h1>
    <div v-for="video in $store.state.videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ $axios, store }) {
    const { data } = await $axios.get("/videos");
    store.commit("SET_VIDEOS", data);
  },
  head: {
    title: "Screencast - Videos",
  },
};
</script>

<style></style>
