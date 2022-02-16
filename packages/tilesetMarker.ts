import { Component } from "./Component";
import type { config } from "../types/config";
import { Mouse } from "./Mouse";

interface MarkerRange {
    lastTileID: number;
    targetX: number;
    targetY: number;
}

/**
 * @class TilesetMarker
 */
class TilesetMarker extends Component {
    protected _config: any;
    protected _tileWidth: number;
    protected _tileHeight: number;
    protected _isReady: boolean;
    protected _element: JQuery<HTMLElement>;
    protected _isDraw: boolean;
    protected _isClicked: boolean;
    protected _blockSize: BlockSize;
    protected touches: Array<{ x: number; y: number }>;

    protected _isDragging: boolean;

    /**
     * 마지막 타일 ID
     */
    protected _lastTileId: number;
    protected _tiles: number[];

    public static DRAGGING_DELAY = 33;

    initMembers(...args: any[]) {
        this._config = args[0];
        this._tileWidth = this._config.TILE_WIDTH;
        this._tileHeight = this._config.TILE_HEIGHT;
        this._isReady = false;
        this._isDragging = false;
        this._lastTileId = 0;
        this._tiles = [];

        this.initWithElement();
        this.active();
    }

    initWithElement() {
        const parent = $("#view");
        let child = null;
        if ((child = document.querySelector("#tileset-marker"))) {
            parent.get(0).removeChild(child);
            return;
        }

        this._element = $("<div></div>", { id: "tileset-marker" }).css({
            "min-width": `${this._tileWidth}px`,
            "min-height": `${this._tileHeight}px`,
            width: `${this._tileWidth}px`,
            height: `${this._tileHeight}px`,
            position: "absolute",
            top: "0",
            left: "0",
            margin: "0",
            padding: "0",
            border: "2px dotted white",
            "z-index": "50",
            "box-sizing": "border-box",
        });

        this._isReady = true;

        parent.append(this._element);

        this._isDraw = false;
        this._isClicked = false;
        this._blockSize = new BlockSize(
            0,
            0,
            this._tileWidth,
            this._tileHeight
        );
        this._blockSize.setParent(this._element);

        this.touches = [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ];

        const topY = $("#view").offset().top;

        this.on("changeTile", (range: MarkerRange) =>
            this.onChangeTileID(range)
        );
    }

    start(...args: any[]) {
        return this;
    }

    update(...args: any[]) {
        if (!this._isReady) {
            return;
        }

        const target = args[0].target;

        const img = $("#view canvas");
        const mapCols = Math.floor(img.width() / this._config.TILE_WIDTH);
        const tilesetWidth = img.width();
        const tilesetHeight = img.height();
        const topY = 0;

        const mouse = <Mouse>args[0];

        const tw = this._tileWidth;
        const th = this._tileHeight;
        let nx = Math.floor(mouse.x / tw) * tw;
        let ny = Math.floor(mouse.y / th) * th;

        const targetX = nx / tw;
        const targetY = (ny - topY) / th;

        if (nx < 0) {
            nx = 0;
        }
        if (nx > tilesetWidth - tw) {
            nx = tilesetWidth - tw;
        }
        if (ny < 0) {
            ny = 0;
        }
        if (ny > tilesetHeight) {
            ny = tilesetHeight - th + topY;
        }

        this._element.css({
            position: "absolute",
            left: nx + "px",
            top: ny - topY + "px",
        });

        console.log("타일 ID : " + (targetY * mapCols + targetX));

        const lastTileID = targetY * mapCols + targetX;

        window.app.setTileId(lastTileID);

        if (this._lastTileId !== lastTileID) {
            this.emit("changeTile", {
                lastTileID,
                targetX,
                targetY,
            });
        }
        this._lastTileId = lastTileID;
    }

    onChangeTileID(range: MarkerRange) {
        console.log("마지막 타일 ID : " + range.lastTileID);
        if (this._isDragging) {
            this._tiles.push(range.lastTileID);

            const c = this._lastTileId - range.lastTileID;
            if (c >= 1) {
                this._blockSize.width = this._tileWidth * c;
            }
        }
    }

    /**
     * 드래그 중인 경우, 여러 타일을 선택합니다.
     * @param args
     */
    onDragEnter(...args: any[]) {
        const mouse = <Mouse>args[0];
        console.log("드래깅 시작");

        this.update(mouse);
        if (mouse.dragTime > TilesetMarker.DRAGGING_DELAY) {
            this._isDragging = true;
        }
    }

    onDragLeave(...args: any[]) {
        const mouse = <Mouse>args[0];
        if (this._isDragging) {
            console.log("드래그가 끝났습니다");
            this._isDragging = false;
            this._tiles = [];
        }
    }
}

class BlockSize {
    private _x = 0;
    private _y = 0;
    private _width = 0;
    private _height = 0;
    private _parent: JQuery<HTMLElement>;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._parent = null;
    }

    set width(value) {
        this._width = value;
    }

    set height(value) {
        this._height = value;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    setParent(parent: JQuery<HTMLElement>) {
        this._parent = parent;
    }

    refresh() {
        this._parent.css({
            width: this.width,
            height: this.height,
            left: this._x,
            top: this._y,
            position: "absolute",
        });
    }
}

export { TilesetMarker };
