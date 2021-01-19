<template>
  <v-container>
    <h1>Register</h1>
    <UserAuthForm
      :has-name="true"
      :submit-form="registerUser"
      button-text="Register"
    />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["addSnackbar"]),
    async registerUser(registrationInfo) {
      try {
        await this.$axios.post("/register", registrationInfo);
        await this.$auth.loginWith("local", {
          data: registrationInfo,
        });
        this.addSnackbar({
          text: `Welcome ${this.$auth.user.name} !`,
        });
        this.$router.push("/");
      } catch (error) {
        this.addSnackbar({
          text: "There was an issue, please try again",
          color: "red",
        });
      }
    },
  },
};
</script>
