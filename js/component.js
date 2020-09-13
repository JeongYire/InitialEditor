class Component {
    constructor(...args) {
        this.initMembers(...args);
        this.start();
    }

    initMembers(...args) {
        this._isActiveEvent = false;
    }

    active() {
        this._isActiveEvent = true;
    }
    
    deactive() {
        this._isActiveEvent = false;
    }

    isActiveEvent() {
        return this._isActiveEvent;
    }

    start() {
        return this;
    }

    update(...args) {

    }
}

class BasicComponent extends Component {
    constructor(...args) {
        super(...args);
    }
}

export { Component, BasicComponent };