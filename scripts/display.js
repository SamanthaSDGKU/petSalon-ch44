function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array (for)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        //create the HTML template
        card += `
        <tr id="${pet.id}">
            <td>  ${pet.name}</td>
            <td> ${pet.age}</td>
            <td> ${pet.gender}</td>
            <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
        </tr>
        `
    }
    DIV.innerHTML=card;
    //insert the HMTL template into the register.html

}