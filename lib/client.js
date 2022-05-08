import CursorEffects from "./components/CursorEffects.vue";
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app }) => {
  app.component("CursorEffects", CursorEffects);
});
