import {ViewModel} from "./ViewModel";
import BaseController from "../controllers/BaseController";

export class TilesetWindowViewModel extends ViewModel {
    
    constructor(__controller : BaseController) {
        super(__controller);
    }

    initMembers() {

    }

    onCreate(elem?: HTMLElement, ...args: any[]) {
        super.onCreate(elem, ...args);
    }

    onShow(elem?: JQuery<HTMLElement>) {
        
    }

}