import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"
import About from "../componens/About.vue";
import PostsCreate from "../componens/PostsCreate.vue";
import PostsShow from "../componens/PostsShow.vue";
import PostsIndex from "@/js/componens/PostsIndex.vue";
import PostsEdit from "@/js/componens/PostsEdit.vue";

const routes: Array<RouteRecordRaw>  = [
    {
        path: "/posts",
        name: "PostsIndex",
        component: PostsIndex,
    },
    {
        path: "/posts/create",
        name: "PostsCreate",
        component: PostsCreate,
    },
    {
        path: "/posts/:id",
        name: "PostsShow",
        component: PostsShow,
    },
    {
        path: "/posts/:id/edit",
        name: "PostsEdit",
        component: PostsEdit
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/posts'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
