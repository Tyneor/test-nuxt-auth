<template>
  <v-card width="340px" hover class="ma-2">
    <!-- :to="{ name: 'video-watch', params: { id: video.id }}" -->
    <v-img :src="video.thumbnail" />
    <v-card-title>{{ video.name }}</v-card-title>
    <v-card-text>
      <!-- <div class="green--text" v-if="isPlayed(video.id)">
        <font-awesome-icon icon="check" /> Played
      </div> -->
    </v-card-text>

    <!-- <v-card-actions>
      <span v-for="tag_id in video.tag_ids" :key="`${video.id}-${tag_id}`">
        <v-btn color="green lighten-2" class="mr-2" small @mousedown.stop>
          :to="{ name: 'tag', params: {id: tag_id}}"
          {{ getTag(tag_id).name }}
        </v-btn>
      </span>
    </v-card-actions> -->
  </v-card>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  props: { video: { type: Object, default: null } },
  methods: {
    //   ...mapGetters({
    //     getTag: 'tags/get',
    //     isPlayed: 'users/videoIsPlayed'
    //   })
    getTag(tagId) {
      return this.tags.find((t) => t.id === tagId);
    },
  },
};
</script>

<style scoped lang="scss"></style>
