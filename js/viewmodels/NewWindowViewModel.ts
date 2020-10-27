import {ViewModel} from "./ViewModel";
import BaseController from "../controllers/BaseController";

interface Config {
    widht: string;
    height: string;
    parentId: string;
    id: string;
    zIndex: string;
    path: string;
    position: string;
    display: string;
}

export class NewWindowViewModel extends ViewModel {
    
    constructor(__controller : BaseController) {
        super(__controller);
    }

    initMembers() {
        super.initMembers();
    }

    onCreate(...args: any[]) {
        super.onCreate(...args);
        const config : Config = args[0]; 
  
        const parent = document.querySelector(`#${config.id}`).parentNode;
        (parent.querySelector(".newWindow__control-box p i") as HTMLElement).onclick = () => {
            this._controller.remove();  
        };
        this._controller.show();
        $(".darken, .windows-container").css("left", "0");
    }

    onShow(elem?: JQuery<HTMLElement>) {
        super.onShow(elem);
    }

}