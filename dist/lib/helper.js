"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _path = require("path");
class helper {
    static getBasePath() {
        if (!this.basePath) {
            this.basePath = _path.join(__dirname, '../../');
        }
        return this.basePath;
    }
}
helper.character = {
    test() {
        console.log('character_test');
    }
};
exports.default = helper;
//# sourceMappingURL=helper.js.map