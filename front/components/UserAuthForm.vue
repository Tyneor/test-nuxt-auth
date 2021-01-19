<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="hasName"
      v-model="userInfo.name"
      label="Name"
      :rules="[() => $v.userInfo.name.required || 'Name Required']"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[
        () => $v.userInfo.email.required || 'Email Required',
        () => $v.userInfo.email.valid || 'Wrong email format',
      ]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[
        () => $v.userInfo.password.required || 'Password required',
        () => $v.userInfo.password.short || 'Password too short (min 8 chars)',
      ]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" @click="submitForm(userInfo)">{{
      buttonText
    }}</v-btn>
  </v-form>
</template>

<script>
const { required, email, minLength } = require("vuelidate/lib/validators");
export default {
  props: {
    submitForm: { type: Function, default: () => {} },
    buttonText: { type: String, default: "Send" },
    hasName: { type: Boolean, default: false },
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      //   hasName: false,
      userInfo: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  validations: {
    userInfo: {
      name: {
        required,
      },
      email: {
        required,
        valid: email,
      },
      password: {
        required,
        short: minLength(8),
      },
    },
  },
};
</script>
