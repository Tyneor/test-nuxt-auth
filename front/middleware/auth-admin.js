export default function ({ $auth, redirect, store }) {
  const user = $auth.$state.user;
  if (user && user.admin) {
  } else {
    store.dispatch("addSnackbar", {
      text: "You must be an admin to view this page",
      color: "red",
    });
    redirect("/");
  }
}
