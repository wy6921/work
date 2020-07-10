import Vue from "vue";
import Router from "vue-router";
import searchWeather from "@/components/searchWeather";
import enterWeather from "@/components/enterWeather";
import login from "@/components/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/searchWeather",
      name: "searchWeather",
      component: searchWeather,
    },
    { path: "/enterWeather", name: "enterWeather", component: enterWeather },
    { path: "/login", name: "login", component: login },
  ],
});
