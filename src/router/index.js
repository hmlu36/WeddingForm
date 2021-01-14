import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

const routes = [
    {
        path: "/",
        name: "RegiestForm",
        component: () => import("../components/RegiestForm.vue"),
    },
    {
        path: "/carousel",
        name: "Carousel",
        component: () => import("../components/Carousel.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});