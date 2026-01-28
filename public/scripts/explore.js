const articleId = 'article';




document.querySelectorAll('#search_button').forEach(element => {
    element.addEventListener('click', (e) => {
        if([...e.target.classList].includes('buttonSelected')){
            document.querySelectorAll('.buttonSelected').forEach(element => {
                element.classList.remove('buttonSelected');
            });
            showAllArticles();
        } else {
            document.querySelectorAll('.buttonSelected').forEach(element => {
                element.classList.remove('buttonSelected');
            });
            e.target.classList.add('buttonSelected');
            filter(e.target.dataset.searchinfo)
        }
    });
});


// Retrieve from URL function
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');

    if (cat) {
        document.querySelectorAll('#search_button').forEach((elem) => {
            if(elem.dataset.searchinfo === cat){
                elem.classList.add('buttonSelected');
            }
        });
        filter(cat);
    }
});




// Register edits on the search form
document.getElementById('search').addEventListener("keyup", function (e){
    console.log(e.target.value);
    filterElement(e.target.value);
});


// 
function filterElement(keyword){
    console.log(keyword);
    if(keyword === undefined){
    document.querySelectorAll('#article').forEach((elem) => {    
    elem.classList.remove('hidden')    
    });
    return;
    }
    document.querySelectorAll('#article').forEach((elem) => {
        
        if(elem.querySelector('h3').innerText.toLowerCase().includes(keyword.toLowerCase())){
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
            
        }
    });
};


// Filter takes a category, determines what subcategories belong to it and hides all those who dont contain those subcategories.
async function filter(category){
    const JSON = await fetchJSON();
    const list = returnOnlySubcategoriesFromJSON(JSON, category);
    iterateThroughAllArticlesAndRemoveWithoutGivenList(list);


}


    async function fetchJSON(){
    const res = await fetch("/scripts/categories.json");
    const data = await res.json();
    return data;
}


// HELPER FUNCTION
function returnOnlySubcategoriesFromJSON(json, category){
    const found = json.categories.find(element => element.categoryName === category);
    if(found){
        return found.subCategories;
    } else {
        return [];
    }
}

// dont talk shit about 'uhh function too long' this is a helper function and is only needed once and gives all the explanation.
function iterateThroughAllArticlesAndRemoveWithoutGivenList(categoriesSubcat) {
  document.querySelectorAll('article').forEach(article => {
    const categories = article.dataset.categories?.split(',') || [];

    const matches = categories.some(cat =>
      categoriesSubcat.includes(cat.trim())
    );

    article.classList.toggle('hidden', !matches);
  });
}

function showAllArticles(){
      document.querySelectorAll('article').forEach(article => {
            article.classList.remove('hidden');
    });

}