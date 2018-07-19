class api{
    constructor(message) {
        this.greeting = message;
    }
}
class apichild extends api{
    log(){
        console.log(this.greeting);
    }
}
export default apichild;