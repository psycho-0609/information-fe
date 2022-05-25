import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "admin-layout",
    defineAsyncComponent(() => import("@/layouts/admin.vue"))
  );
  app.component(
    "user-layout",
    defineAsyncComponent(() => import("@/layouts/user.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default.vue"))
  );
}
