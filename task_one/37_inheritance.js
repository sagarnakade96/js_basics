// Inheritance
class Student {
  constructor(name) {
    this.name = name;
  }
  logMe() {
    return `student name received ${this.name}`;
  }
  formatName() {
    return this.name.toUpperCase();
  }
}

class Teacher extends Student {
  constructor(name, email, roll_num) {
    super(name);
    this.email = email;
    this.roll_num = roll_num;
  }

  getStudentInfo() {
    return `Student Name : ${this.formatName()}, Email: ${
      this.email
    }, Roll Number : ${this.roll_num}`;
  }
}

class Principal extends Teacher {
  constructor(teacher, name, email, roll_num) {
    super(name, email, roll_num);
    this.teacher = teacher;
  }
  getTeacherInfo() {
    return `Teacher : ${
      this.teacher
    } has been assigned to Student Info: ${this.getStudentInfo()} `;
  }
}

let principal = new Principal(
  "teacher001",
  "student001",
  "user001@example.com",
  "num_001"
);
console.log(principal.getTeacherInfo());
