class Obj {
    callMe = () => {
        console.log(this)
    }
    constructor(){
        this.func = this.callMe;
    }
}

let obj = new Obj();
obj.callMe()
let func = obj.callMe;
func()