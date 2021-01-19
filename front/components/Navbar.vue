<template>
  <v-app-bar app color="green">
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/videos">Videos</v-btn>
    <v-btn v-if="$auth.user && $auth.user.admin" text to="/admin">Admin</v-btn>
    <v-spacer />
    <div v-if="$auth.loggedIn">
      {{ $auth.user.name }}
      <v-btn text @click="$auth.logout()">Logout</v-btn>
    </div>
    <div v-else>
      <v-btn text to="/login">Login</v-btn>
      <v-btn text to="/register">Register</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>
