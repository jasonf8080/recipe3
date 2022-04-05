import { fetchData } from "./fetchData.js";
import { setTrending } from "./trending.js";
import { categoriesData } from "./utils.js";
import { paginate } from "./trending.js";
import { displayRecipe } from "./display.js";
import { displayCategories } from "./display.js";
import { selectRecipe } from "./category.js";
import { hideLoader, showLoader } from "./loading.js";



const trendingSection = document.querySelector('.trending-grid');
const categorySection = document.querySelector('.categories-grid');
const numbers = document.querySelector('.pages-div');
const numbersElements = [...document.querySelectorAll('.number')];
let index = 0;
let pages = [];

const loader = document.querySelector('.loader-container');




//EVENT LISTENERS//
const load = async() =>{

    document.title = 'Home';
    const data = await fetchData();
    const trending = setTrending(data);
    
   
   pages = paginate(trending);//whole array
   console.log(pages)
   displayRecipe(trendingSection, pages[index]);
   displayCategories(categorySection, categoriesData);

   
   const categories = [...document.querySelectorAll('.category-item')];
   selectCategory(categories);

   const trendingRecipes = [...document.querySelectorAll('.recipe-item')];
    selectRecipe(trendingRecipes);
   
}



numbers.addEventListener('click', (e) => {
    if(e.target.classList.contains('number')){
       
       index = parseInt(e.target.dataset.id - 1);
       displayRecipe(trendingSection, pages[index]);

       
       
       const trendingRecipes = [...document.querySelectorAll('.recipe-item')];
       selectRecipe(trendingRecipes);
    }
  })
  

  numbersElements.forEach(number => {
    number.addEventListener('click', () => {
        numbersElements.forEach(number => {
            number.classList.remove('active');
        })
        number.classList.add('active');
    })
}) 



 
const selectCategory = (categories) => {
    categories.forEach((category) => {
        category.addEventListener('click', (e) => {
           let selectedCategory = e.currentTarget.dataset.id;
            localStorage.setItem('category', selectedCategory);
        })
    })
}



window.addEventListener('load', load);
