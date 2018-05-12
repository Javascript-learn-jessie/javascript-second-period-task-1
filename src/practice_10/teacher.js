import Person from "./person"
module.exports = class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        if (this.klasses == undefined) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        else {
            var klassNum = this.klasses[0].number;

            for (let i = 1; i < this.klasses.length; i++) {

                klassNum += ", " + this.klasses[i].number;
            }
            return super.introduce() + ` I am a Teacher. I teach Class ${klassNum}.`;
        }
    }
    isTeaching(student) {
        return true;
    }
}

