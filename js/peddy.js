console.log('hey hi')

const allCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err))
}



const displayCategories =(categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(item => {
        console.log(item)
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        categoryContainer.append(button)
        
    });

}


allCategories()

const allPetCards = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then( res => res.json())
    .then(data => displayCards(data.pets))
    .catch(err => console.log(err))
}

//   const demoPet =
//     {
//         petId: 2,
//        breed: "Siamese",
//         category: "Cat",
//         date_of_birth: "2022-09-05",
//         price: 800,
//         image: "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
//         gender: "Female",
//         pet_details: "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
//         vaccinated_status: "Fully",
//        pet_name: "Mia"
//       }
  

const displayCards =(pets) => {
    const petContainer =document.getElementById('pets')
   pets.forEach(pet => {
    console.log(pet)
    const card =document.createElement('div')
    card.classList = 'card card-compact w-64 '
    card.innerHTML=
    `
    <figure class=" h-[160px] ">
    <img
      src=${pet.image}
      class="w-full h-full object-cover "
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
  <h2 class="font-bold text-xl">${pet.pet_name}</h2>
  <div class="flex gap-2">
     <img class="w-3 h-4" src="images/magnification.png" alt="">
  <p class="font-normal text-sm  "><span class="font-bold"> Breed :</span> ${pet.breed}</p> 
  </div>

  <div class="flex gap-2">
    <img class="w-3 h-4" src="images/calendar.png" alt="">
  <p class="font-normal text-sm "><span class="font-bold"> Birth :</span> ${pet.date_of_birth}</p>
  </div>

  <div class="flex gap-2">
  <img class="w-3 h-4" src="images/gender.png" alt="">
   <p class="font-normal text-sm "><span class="font-bold"> Gender :</span> ${pet.gender}</p>
    </div>

   <div class="flex gap-2">
   <img class="w-3 h-4" src="images/dollar-sign.png" alt="">
    <p class="font-normal text-sm "><span class="font-bold"> Price :</span> ${pet.price} $</p>
    </div>
    
  </div>
    
    `
    petContainer.append(card)

   })
}

allPetCards();