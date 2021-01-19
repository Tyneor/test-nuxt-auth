<template>
  <div>
    on all videos pages
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style></style>
