class Student {
  constructor(name, skillLevel, assignments) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }

  study() {
    if(this.skillLevel < 100) {
      this.skillLevel += 1;
      return this;
    }
  }

  doHomework(assignment) {
    // Create 'let' of skillLevel on homework and compare to student skillLevel
    // Create check to see if 'assignment' is not present / If not, attempt to complete homework in array
  }
}

module.exports = Student
