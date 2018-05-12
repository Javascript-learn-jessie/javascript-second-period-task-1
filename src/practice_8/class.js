module.exports = class klass {
    leader;
    constructor(number) {
        this.number = number;
    }
    assignLeader(student) {
        if (student.klass.number == this.number)//判断是否是该班的学生
            this.leader = student;
    }
    getDisplayName() {
        return `Class ${this.number}`;
    }
}

