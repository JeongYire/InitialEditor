import * as fs from "fs";

class Schema {
    constructor(config: any) {   
        this.initMembers(config);
    }

    initMembers(config: any) {
        
    }

    /**
     * 멤버 변수를 JSON 데이터로 변환합니다.
     */
    toJson() {
        return JSON.stringify(this, null, "    ");
    }

    /**
     * 파일로 내보냅니다 (비동기 방식)
     * 
     * @param filename 
     */
    toFile(filename?: string): Promise<void> {

        const path = require('path');

        if(!filename) {
            filename = this.constructor.name;
        }

        const contents = this.toJson();

        return new Promise((resolve, reject) => {
            fs.writeFile(filename, contents, {encoding: "utf8"}, (err) => {
                if(err) {
                    reject(err.message);
                }
                resolve();
            });
        });
    }

}

export {Schema};