import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/form" },
    {
      path: "/form",
      name: "Form Registration",
      component: () => import("./pages/formRegistration.vue"),
    },
    {
      path: "/edit/:id",
      name: "Form Detail",
      component: () => import("./pages/formRegistration.vue"),
    },
    {
      path: "/data",
      name: "Form Data",
      component: () => import("./pages/formDataCopy.vue"),
    },

    {
      path: "/:notFound(.*)",
      name: "NotFoundPage",
      redirect: "/form",
    },
  ],
});

export default router;
