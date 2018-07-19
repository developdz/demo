"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class helper {
    static test() {
        console.log('test');
    }
    static awaitTest() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(' enough sleep~');
            }, 1000);
        });
    }
}
helper.character = {
    test() {
        console.log('character_test');
    }
};
exports.default = helper;
//# sourceMappingURL=helper.js.map