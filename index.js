//Object Literals
// const people = {

//     Name: 'juan Dela Cruz',
//     Age: 30,
//     Gender: 'Male'
// }
 
//ES5 Constructor
function People(Name, Age, Gender){
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

    // this.getInfo = function(){
    //     return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
    // }
}

//Create a prototype
People.prototype.getInfo = function(){
    return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
}

People.prototype.getAge = function() {
    return `${this.Name} is ${this.Age} years old`;
}

//inheritance
function Students(Name, Age, Gender, YearEnrolled){

    People.call(this, Name, Age, Gender);
    this.year = YearEnrolled;
}

Students.prototype = Object.create(People.prototype);

Students.prototype.enRoll = function(YearEnrolled){
    this.year = YearEnrolled;
    this.enrolled = true;
}


const student = new Students('Juan Dela Cruz', 30, 'Male', '2020');

// const people = new People('Juan Dela Cruz', 30, 'Male');
// const people2 = new People('Juana Dela Cruz', 26, 'Female');

//console.log(student);
student.enRoll('2021');
console.log(student);


