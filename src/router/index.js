import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LockScreen",
    component: () => import("@/views/LockScreen.vue"),
    meta: {
      auth: false
    }
  },
  {
    path: "/cashWithdrawal",
    name: "CashWithdrawal",
    component: () => import("@/views/CashWithdrawal.vue"),
    meta: {
      auth: true
    }
  },
  {
    path: "/resultWithdrawal",
    name: "ResultWithdrawal",
    component: () => import("@/views/ResultWithdrawal.vue"),
    meta: {
      auth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/auth"]) {
    next({
      name: ""
    });
  } else {
    next();
  }
});

export default router;
