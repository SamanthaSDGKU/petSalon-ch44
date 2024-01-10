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
let counter=0;
//object constructor (function)
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.id=counter++;
}

function isValid(aPet){
    let validation =true;
    $("input").removeClass("bg-red");
    if(aPet.name==""){
        validation=false;
        $("#txtName").addClass("bg-red");
    }
    if(aPet.age==""){
        validation=false;
        $("#txtAge").addClass("bg-red");
    }
    return validation;
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
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        //display the pets array on the console
        displayPetCards();
        $("input").val("");// clear the inputs
        showNotification("notifications","alert-success","Registration was sucessful");
    }else{
        showNotification("notifications","alert-danger","Please add all the required fields!");
    }
}

function showNotification(id,styling,message){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(300).delay(2000).slideUp(300);
}

function deletePet(petID){
    console.log("Deleting pet " + petID);
    let deleteIndex;
    document.getElementById(petID).remove();//remove from HTML
    for(let i=0;i<petSalon.pets.length;i++){//traveling the array
        let pet=petSalon.pets[i]; // gettting the current pet
        if(pet.id==petID){
            deleteIndex=i; //we found the pet, store the index
        }
    }
    petSalon.pets.splice(deleteIndex,1);//remove the pet form the array
}
function addServices(){
    let services = readArray();
    for(let i=0;i<services.length;i++){
        $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`)
    }
}
function init(){
    //creating pets using constructor
    let p1 = new Pet("Scooby",60,"Male","Dane");
    let p2 = new Pet("Scrappy",50,"Male","Mixed");
    let p3 = new Pet("Lucas",70,"Male","Duck");
    //pushing pets into the pets array
    petSalon.pets.push(p1,p2,p3);
    addServices();
    displayPetCards();

    //hook events
    $("#notifications").hide();

}

window.onload=init; //waits for render the HTML
