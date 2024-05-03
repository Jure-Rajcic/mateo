import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const routes = [
  // example how to pass props and custom layout
  {
    path: "/",
    component: HelloWorld,
    props: {
      msg: "Hello Worlddddddddddddddddddddddddddddddddddddddddddddddd!",
    },
    meta: {
      layout: DefaultLayout,
    },
  },

  // example how to lazy load component
  {
    path: "/about",
    component: () => import("./pages/about/AboutPage.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },

  // example how to lazy load async component
  {
    path: "/store",
    component: () => import("./pages/store/StorePage.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },

  // example how to lazy load async component with props & query params
  {
    path: "/store/:id",
    name: "store[id]",
    component: () => import("./pages/store[id]/Store[id]Page.vue"),
    meta: {
      layout: DefaultLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0);
//   next();
// });

export { router };
