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