<template>
  <div>
    <h1>Editing {{ video.name }}</h1>
    <nuxt-link :to="`/videos/${video.id}`">
      <button>Back</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    video: { type: Object, default: () => ({ id: null, name: null }) },
  },
  head: {
    title: "Edit",
  },
};
</script>

<style></style>
