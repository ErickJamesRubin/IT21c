class Person{

    //private Fields
    #name;
    #age;
    #occupation;
    #motto;
    #healthstatus;

    constructor(name, age, occupation, motto, healthstatus){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#motto = motto;
        this.#healthstatus = healthstatus;
    }

    //getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }

    // method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Motto: " + this.motto);
        console.log("Health-Status: " + this.healthstatus);
    }

    // method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>Motto:</strong> ${this.motto}
            <strong>Health-Status:</strong> ${this.healthstatus}
        `;
    }
}


// Creating an object (instance) of the Person class
const personOne = new Person('Royskie', 19, 'Student pa po', 'I will never stop until it is not the end','excellent');

// Calling methods
personOne.displayInfo();  
personOne.displayInfoHTML();