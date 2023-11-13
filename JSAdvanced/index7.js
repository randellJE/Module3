// Section 7: In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.


// a) Define a custom toString method for the Person object that will format and print
//  their details
// b) Test your method by creating 2 different people using the below constructor function
//  and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
//  add an extra property cohort
// d) Add a custom toString for Student objects that formats and prints their details. Test
//  with 2 students.


//A

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.toString = function() {
        return `Name = ${this.name}, Age = ${this.age}, Gender = ${this.gender}`
    }
}
   
const person1 = new Person('Jamie Foxx', 55, 'male')

console.log('person1: '+person1)

// B

const person2 = new Person('Carrie Underwood', 40, 'female')

console.log('person1: '+person1)
console.log('person2: '+person2)


//C

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    
    this.cohort = cohort;

    Student.prototype.toString = function() {
        return `Name = ${this.name}, Age = ${this.age}, Gender = ${this.gender}, Cohort = ${this.cohort}`
    }
}

const student1 = new Student("Randy", 21, "male", 2020)
const student2 = new Student("Maddy", 22, "male", 2018)

console.log(`Student 1: ` + student2)