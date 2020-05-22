const string = 'PinoyFreeCoder'; //Primitive but its an object in the background

const string2 = new String('PinoyFreeCoder'); //Create String as object

// Object Literals
const people = {
    Name : 'Juan Dela Cruz',
    Age : 30,
    Gender: 'Male',
    getInfo: function() {
        return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
    }
}

console.log(Object.values(people));
console.log(Object.keys(people));

//Constructor
function People(Name, Age, Gender)
{
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;

    this.getInfo = function(){
        return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
    }
}

//class constuctor ES6
class People {
    constructor(Name, Age, Gender) {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
    }
  }

//Instatiate an Object
const people = new People('Juan Dela Cruz', 30, 'Male');
const people2 = new People('Juana Dela Cruz', 28, 'Female');

//Prototype is a Sudo object
//Create a prototype
People.prototype.getInfo = function(){
    
  return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
 
}

People.prototype.getAge = function ()
{
    return `${this.Name} is ${this.Age} years old.`;
}

People.prototype.enRoll = function(YearEnrolled){
    let dateEnrolled = YearEnrolled;
    this.enrolled = true;
    return `${this.Name} was enrolled on ${dateEnrolled}`;
};

//inheritance
function Students(Name, Age, Gender, YearEnrolled){

    People.call(this, Name, Age, Gender);
    this.year = YearEnrolled;
}

Students.prototype = Object.create(People.prototype);

const student = new Students('Juan Dela Cruz',21,'Male','2020');

//User Student as a Constructor
Students.prototype.constructor = Students;

console.log(student);

// console.log(people);
// console.log(people.enRoll('2020'));
// console.log(people);