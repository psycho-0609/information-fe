import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue"
import Information from "@/views/admin/Information.vue"
import InformationUser from "@/views/user/Information.vue"
import InformationDisable from "@/views/admin/InformationDisable.vue"

const routes = [
    {
        path: "/login",
        name: "login-route",
        component: Login,
        meta: {
            layout: "default-layout",
        },
    },
    {
        path: "/admin/information",
        name: "admin-information",
        component: Information,
        meta: {
            layout: "admin-layout",
        },
    },
    {
        path: "/user/information",
        name: "user-information",
        component: InformationUser,
        meta: {
            layout: "user-layout",
        },
    },
    {
        path: "/admin/information/disable",
        name: "admin-information-disable",
        component: InformationDisable,
        meta: {
            layout: "admin-layout",
        },
    },
    {
        path: "/admin/information/disable",
        name: "admin-information-disable",
        component: InformationDisable,
        meta: {
            layout: "admin-layout",
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;