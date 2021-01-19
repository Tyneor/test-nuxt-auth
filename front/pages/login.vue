<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm :submit-form="loginUser" button-text="Login" />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["addSnackbar"]),
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith("local", {
          data: loginInfo,
        });
        this.addSnackbar({
          text: `Thanks for signing in, ${this.$auth.user.name}`,
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

<style scoped></style>
