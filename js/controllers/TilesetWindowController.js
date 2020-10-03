import TilesetWindowModel from "../models/TilesetWindow.js";
import BaseController from "./BaseController.js";

/**
 * @author Eo Jinseok
 * @class Renderer
 */
export default class TilesetWindowController extends BaseController {
    /**
     * @param {GamePropertiesWindow} config
     */
    constructor(config) {
        super( config );
    }

    onLoad(elem, self) {
        super.onLoad(elem, self);
        const parent = elem.parentNode;
        parent.querySelector(".tilesetWindow__control-box p i").onclick = () => {
            self.remove();
        };

        $(elem.parentNode).find(".tilesetWindow__panel #ok").on("click", ev => {
            this.onOk(ev);
        })

        $(elem.parentNode).find(".tilesetWindow__panel #cancel").on("click", ev => {
            this.onCancel(ev);
        })

        this.show();
    }   
    
    onOk(ev) {
        this.remove();
        
        const tilesets = this._element.find("input");
        const data = {
            tilesets: {
                name: $(tilesets[0]).val(),
                src: $(tilesets[1]).val(),
            },
            tile: {
                width: parseInt($(tilesets[2]).val()),
                height: parseInt($(tilesets[3]).val()),
            }
        }
        
        $('form[name="uploadTilesetImage"]').on("submit", function(e) {
            e.preventDefault();

            $.ajax({
                type: 'POST',
                cache:false,
                contentType: false,
                processData: false,
                url: $(this).attr('action'),
                data: new FormData(this),
                success: function(msg) {
                    console.log(msg);
                },
                error: function(data){
                    console.log("error");
                    console.log(data);
                }                
            });
        });    
    }

    onCancel(ev) {
        ev.preventDefault();
        this.remove();
    }

}