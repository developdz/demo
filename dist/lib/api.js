"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class api {
    constructor(message) {
        this.greeting = message;
    }
}
class apichild extends api {
    log() {
        console.log(this.greeting);
    }
}
exports.default = apichild;
//# sourceMappingURL=api.js.map