module.exports = class klass{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return `Class ${this.number}`;
    }
}
