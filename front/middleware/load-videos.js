export default async function ({ store, from }) {
  const isInitialPageLoad = !from;
  if (isInitialPageLoad) {
    await Promise.all([
      store.dispatch("loadAllVideos"),
      //   store.dispatch("loadOtherThings"),
    ]);
  }
}
