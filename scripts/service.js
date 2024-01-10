let services=[]; //array

// creating the constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//create the register function
function register(){

    let inputDescription = $("#txtDescription").val();
    let inputPrice= $("#txtPrice").val();

    let newService = new Service(inputDescription,inputPrice);
    saveArray(newService);
        
}

//create the init function
function init(){
    let s1 = new Service("Grooming",20);
    services.push(s1);
    //hook events
    $("#btnRegister").on('click',register);
}
//wait for render the HMTL
window.onload=init;