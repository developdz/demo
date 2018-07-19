import * as _path from 'path';

export default class helper {
    static character = {
        test() {
            console.log('character_test')
        }
    }
    static getBasePath() {
        if(!this.basePath){
            this.basePath=_path.join(__dirname,'../../');
        }
        return this.basePath;
    }
}