
const scrollToMain = () => {
  document.getElementById("main-section").scrollIntoView({behavior:'smooth'})
}



const allCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err))
   
}
allCategories();
// "id": 1,
//       "category": "Cat",
//       "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// https://openapi.programming-hero.com/api/peddy/category/${id}
const categoryCards =(id) =>{
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then(data => displayCards(data.data))
    .catch(err => console.log(err))
   
}
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById('categories')

  categories.forEach(item => {
      console.log(item)
      const buttonContainer = document.createElement('div');
      buttonContainer.innerHTML = 
      `
      <button onclick ="categoryCards('${item.category}')" class="btn">
    <div class="lg:flex lg:gap-3 flex gap-1  lg:px-7">
    <img class="h-5" src="${item.category_icon}" alt="">
    ${item.category}
    </div>
    </button>
    `
    categoryContainer.append(buttonContainer)
  });
}

const allPetCards = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then( res => res.json())
    .then(data => displayCards(data.pets))
    .catch(err => console.log(err))
}

const displayCards =(pets) => {
    const petContainer =document.getElementById('pets')
    petContainer.innerHTML=""

    if(pets.length == 0){
      petContainer.classList.remove('grid')
      petContainer.innerHTML =
      `
      <div class="flex flex-col gap-6 justify-center items-center">

      <img src="images/error.webp" alt="">
      <h1 class="text-center font-bold text-xl">No Information Available</h1>
      <p class="font-normal lg:text-sm  text-xs"> All birds were  sold. Please visit other pet sites,Thank You. </p>
    </div>
    `
    }
    else{
      petContainer.classList.add('grid')
    }
    
      

   pets.forEach(pet => {
    console.log(pet)
    const card =document.createElement('div')
    card.classList = 'card card-compact md:w-48 lg:w-60 w-32 '
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
     <img class="lg:w-3 lg:h-3 w-2 h-3 my-1" src="images/magnification.png" alt="">
  <p class="font-normal lg:text-sm  text-xs "><span class="font-bold"> Breed :</span> ${pet.breed}</p> 
  </div>

  <div class="flex gap-2">
    <img class="lg:w-3 lg:h-3 w-2 h-3 my-1" src="images/calendar.png" alt="">
  <p class="font-normal lg:text-sm  text-xs"><span class="font-bold"> Birth :</span> ${pet.date_of_birth}</p>
  </div>

  <div class="flex gap-2">
  <img class="lg:w-3 lg:h-3 w-2 h-3 my-1" src="images/gender.png" alt="">
   <p class="font-normal lg:text-sm  text-xs"><span class="font-bold"> Gender :</span> ${pet.gender}</p>
    </div>

   <div class="flex gap-2">
   <img class="lg:w-3 lg:h-3 w-2 h-3 my-1"src="images/dollar-sign.png" alt="">
    <p class="font-normal lg:text-sm  text-xs "><span class="font-bold"> Price :</span> ${pet.price} $</p>
    </div>
     <div class="flex lg:gap-2 ">
    <button onclick="" class="btn"><img src="images/like-account.png" alt=""></button>
     <button onclick="" class="btn  text-[#0E7A81]">Adopt</button>
     <button onclick="" class="btn  text-[#0E7A81]">Details</button>
   </div>
  </div>
    
    `
    petContainer.append(card)

   })
  
}

allPetCards();
 
 




    




  


  
  
      

      
      
      



