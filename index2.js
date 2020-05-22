//Create Object
// const People = {

//     getInfo : function(){
//             return `${this.Name} is a ${this.Gender} and ${this.Age} years old`;
//         }
// }


// const people = Object.create(People);
// people.Name = 'Juan Dela Cruz';
// people.Age = 30;
// people.Gender = 'Male';

// const people = Object.create(People, {
//     Name: {value: 'Juan Dela Cruz'}
// })

//ES6 Constuctor
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

class Students extends People{

    constructor(Name, Age, Gender, YearEnrolled){
        super(Name, Age, Gender);
        this.year = YearEnrolled;
    }

    enRoll(YearEnrolled){
        this.year = YearEnrolled;
        this.enrolled = true;
    }
}

//Instantiate
//const people = new People('Juan Dela Cruz', 30, 'Male');

const student = new Students('Juan Dela Cruz', 30, 'Male', '2020');
const { Name, Age, Gender, YearEnrolled } = student;

console.log(Name);

