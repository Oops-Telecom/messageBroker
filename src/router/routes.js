const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
    ],
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/plans",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/PlansPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
