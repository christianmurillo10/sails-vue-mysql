import Vue from "vue";
import Router from "vue-router";
import ErrorPage from '../views/Error'
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import Users from "../views/users/Index";
import Roles from "../views/roles/Index";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/roles",
      name: "roles",
      component: Roles
    }
  ]
})

export default router
