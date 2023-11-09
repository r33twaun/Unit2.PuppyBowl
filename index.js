//create a local Object to store puppy details
const puppies = {
    pupInfo: [],
}
// puppies.pupInfo.join(``)


//create a global API link
const apiLink =`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/`;

//html references
const body = document.querySelector(`body`)

//get info from API to store in local object
const puppyDetails = async () => {
    const response = await fetch(`${apiLink}`);
    const jsonResponse = await response.json();
    puppies.pupInfo = (jsonResponse.data.players);
    
    console.log(puppies.pupInfo)
    infoAllCards(puppies.pupInfo)
}
puppyDetails()

const infoAllCards = (pupInfo) => {
    console.log(puppies.pupInfo)
    const inform = pupInfo.map((info) => {
        return `
        <div>
            <img src="${info.imageUrl}" alt="picture of a pup" />
            <h2>${info.name}</h2>
        </div>
        `
    
    });
    body.innerHTML = inform.join(``)
}

const selectMyPuppies = document.querySelectorAll(`img`);
    selectMyPuppies.forEach((puppy) => {
        console.log(puppy)
    })






// const infoAllCards = () => {
//     console.log(puppies.pupInfo)
//     const inform = puppies.pupInfo.map((info) => {
//         return `
//         <div>
//             <p>This dog's name is ${info.name} and ${info.breed} is their
//             breed. They are currently on the ${info.status}. If you want to 
//             gamble their ID number is ${info.id}</p>
//         </div>
//         `
    
//     });
//     displayPupCards(inform)
// }