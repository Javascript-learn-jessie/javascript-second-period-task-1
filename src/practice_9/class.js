
module.exports = class klass {
    leader;
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (student.klass.number == this.number){
            //判断是否是该班的学生
            this.leader = student;
        }else{
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
}

