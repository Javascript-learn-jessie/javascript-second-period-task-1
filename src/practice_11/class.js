
module.exports = class klass {
    leader;
    teacher;
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (this.number == student.klass.number){
            this.leader = student;
            if(this.teacher!=undefined){
                console.log(`I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
            }
        }
        else{
            console.log("It is not one of us.");
        }
    }
    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    appendMember(student) {
        student.klass = this;
        if(this.teacher != undefined){
            console.log(`I am ${this.teacher.name}. I know ${student.name} has joined ${student.klass.getDisplayName()}.`)
        }
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
    isIn(student) {
        if (student.klass.number==this.number) {
            return true;
        }
        return false;
    }
    registerJoinListener(teacher){
        this.teacher = teacher;
    }

}



