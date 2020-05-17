import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddSmoothie from "../components/AddSmoothie";
import index from "../components/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/AddSmoothies",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/index",
    name: "index",
    component: index
  }
    
];

const router = new VueRouter({
  routes
});

export default router;
