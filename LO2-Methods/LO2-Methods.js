//input
const person1 ={
    name:"Erick James P. Rubin",
    age:19,
    occupation:"Current student taking BSIT at Northern Bukidnon State College",
    motto:"My motto in life is every mistake could be a lesson, the more you get mistake, the more you gain knowledge",
    healthstatus: "VERY STRONGLY EXCELLENT"
}

//process and output
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Occupation: "+person1.occupation);
console.log("Motto: " + person1.motto);
console.log("Health-Status: " + person1.healthstatus);
console.log("--------------------------------");


// Class definition
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.motto = motto;
        this.healthstatus = healthstatus;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Motto: " + this.motto);
        console.log("Health-Status: " + this.healthstatus);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>Motto:</strong> ${this.motto}
            <strong>Health Status:</strong> ${this.healthstatus}
        `;
    }
}

// creating an object (instance) of the Person class
const personOne = new Person('Erick James P. Rubin', 19, 'Tanawon lang kung mag work ta', 'To get the right person, be the right person first', 'it is still fine cause I live and you love');

// calling methods
personOne.displayInfo();