import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Page from "../componens/Page.vue";
import About from "../componens/About.vue";

const routes: Array<RouteRecordRaw>  = [
    {
        path: "/",
        name: "Home",
        component: Page,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
