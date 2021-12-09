import Vue from "vue";
import VueRouter from "vue-router";
import { EventEmitter } from "./EventEmitter";
import VueApp from "./views/VueApp.vue";
import NewWindow from "./views/NewWindow.vue";
import MainContainer from "./views/MainContainer.vue";

export class VueBinder extends EventEmitter {
    private vnode: Vue;
    private vContainer: Vue;

    constructor() {
        super();
    }

    getRoutesForMainContainer(): any {
        return [
            { path: "/", name: "home", component: MainContainer },
            {
                path: "/newWindow",
                name: "newWindow",
                component: NewWindow
            }
        ];
    }

    mount() {
        // 라우터 사용
        Vue.use(VueRouter);

        const routerForMainContainer = new VueRouter({
            mode: "history",
            routes: this.getRoutesForMainContainer()
        });

        this.vContainer = new Vue({
            router: routerForMainContainer,
            render: h => h(MainContainer)
        }).$mount("#container");
    }
}
