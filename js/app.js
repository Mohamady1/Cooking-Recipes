//Global Varaible
const topPage = document.querySelector('#myBtn');
const go = document.querySelector('.btn-search');
const form = document.querySelector('.input');
const searchResult =document.querySelector('.food-informa');
const container = document.querySelector('body');
let userQuery = "" ;

//API
const ID = "1ca1d3b1";
const key = "62d7392ffcf842ad6453def3d31e59f3";

go.addEventListener("click", (e) => {
    e.preventDefault();
    userQuery = document.querySelector('input').value; 
    getAPI();
    document.querySelector('input').value = "";
})

window.onscroll = () => {
    if (document.documentElement.scrollTop > 500) {
        topPage.style.display = 'block';
    }
    else {
        topPage.style.display = 'none';
    }
}

topPage.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

//https://api.edamam.com/search
const getAPI = async() => {
    const baseURL = "https://api.edamam.com/search";
    const data = await fetch(`${baseURL}?q=${userQuery}&app_id=${ID}&app_key=${key}`);
    try {
    const json = await data.json();
    createContent(json.hits);
    console.log(json);
    }
    catch (error) {
        console.log('Error is ' + error);
    }
}

function createContent(results) {
    let content = "";
    for (let result of results) {
        result = searchResult.innerHTML = content +=
        `<section>
            <div class="image">
                <img src="${result.recipe.image}">
            </div>
            <div class="info">
                <h1>calaroies: ${result.recipe.calories.toFixed(1)}</h1>
                <button><a href="${result.recipe.url}">Get Recipe</a></button>
            </div>
        </section>`;
    }
}