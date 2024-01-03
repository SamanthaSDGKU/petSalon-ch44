//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Av. Universidad",
        number:"7250",
        zip:"22900"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[] //array
}
//object constructor (function)
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    console.log("Registering");
    //get the values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed);
    //push the object
    petSalon.pets.push(newPet);
    //display the pets array on the console
    console.log(petSalon.pets);
}

//creating pets using constructor
let p1 = new Pet("Scooby",60,"Male","Dane");
let p2 = new Pet("Scrappy",50,"Male","Mixed");
let p3 = new Pet("Lucas",70,"Male","Duck");
//pushing pets into the pets array
petSalon.pets.push(p1,p2,p3);

console.log(petSalon.pets);
