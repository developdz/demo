export default class helper {
    static character = {
        test() {
            console.log('character_test')
        }
    }
    static test() {
        console.log('test')
    }
    static awaitTest(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(' enough sleep~');
            }, 1000);
        })
    }
}