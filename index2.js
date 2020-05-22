//Object of Protos
const People = {
    getInfo: function()
    {
        return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
    },
    getAge: function ()
    {
        return `${this.Name} is ${this.Age} years old.`;
    },
    enRoll: function(YearEnrolled){
        let dateEnrolled = YearEnrolled;
        this.enrolled = true;
        return `${this.Name} was enrolled on ${dateEnrolled}`;
    }
}

//Create  Object

const people = Object.create(People);
people.Name = 'Juan Dela Cruz';
people.Age = 30;
people.Gender = 'Male';

const people = Object.create(People, {
    Name: {value: 'Juan Dela Cruz'},
    Age: { value: 30},
    Gender: {value: 'Male'}
});

//Sytatic Sugar
class People {
    constructor(Name, Age, Gender){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
    }

    getInfo()
    {
       return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
    }
}

//Instantiate
const people = new People('Juan Dela Cruz', 30, 'Male');

console.log(people);