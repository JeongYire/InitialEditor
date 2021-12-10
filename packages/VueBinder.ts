import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import { EventEmitter } from "./EventEmitter";
import NewWindow from "./views/NewWindow.vue";
import MainContainer from "./views/MainContainer.vue";
import TilesetWindow from "./views/TilesetWindow.vue";

export class VueBinder extends EventEmitter {
    private vContainer: Vue;

    constructor() {
        super();
    }

    /**
     * 메인 컨테이너에서 사용할 라우터 설정
     * @returns
     */
    getRoutesForMainContainer(): any {
        return [
            { path: "/", name: "home", component: MainContainer },
            {
                path: "/newWindow",
                name: "newWindow",
                component: NewWindow
            },
            {
                path: "/optionWindow",
                name: "optionWindow",
                component: TilesetWindow
            }
        ];
    }

    /**
     * Vuex 스토어 생성
     * @returns {Vuex.Store}
     */
    initWithVuexStore() {
        const store = new Vuex.Store({
            actions: {},
            modules: {},
            state: {},
            getters: {}
        });

        return store;
    }

    /**
     * 뷰 마운트
     */
    mount() {
        // 미들웨어 사용
        Vue.use(Vuex);
        Vue.use(VueRouter);

        // 라우터 설정
        const routerForMainContainer = new VueRouter({
            mode: "history",
            routes: this.getRoutesForMainContainer()
        });

        // 컨테이너 생성
        this.vContainer = new Vue({
            router: routerForMainContainer,
            store: this.initWithVuexStore(),
            render: h => h(MainContainer)
        }).$mount("#container");
    }
}
