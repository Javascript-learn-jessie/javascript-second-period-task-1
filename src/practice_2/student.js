import Person from "./person"
module.exports = class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return `I am a ${Student.name}. I am at Class ${this.klass}.`
    }
}
// student  = new Student("tom",12,2);
// console.log(introduce());
// exports["default"] = Student;
// module.exports = exports["default"];