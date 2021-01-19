<template>
  <!-- <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar> -->
  <div>
    <v-snackbar
      v-for="(snackbar, index) in snackbars"
      :key="index"
      :value="snackbar.showing"
      :color="snackbar.color || 'success'"
      timeout="-1"
      :style="`top: -${index * 60 + 8}px`"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="removeSnackbar(index)">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["snackbars"]),
  },
  methods: {
    ...mapActions(["removeSnackbar"]),
  },
};
</script>
