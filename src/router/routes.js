const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/cadastro",
        name: "Register",
        component: () => import("pages/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "/painel",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/planos",
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
