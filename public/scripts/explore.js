const articleId = 'article';




document.querySelectorAll('#search_button').forEach(element => {
    element.addEventListener('click', (e) => {
        document.querySelectorAll('.buttonSelected').forEach(element => {
            element.classList.remove('buttonSelected');
        });
        e.target.classList.add('buttonSelected');
        filter(e.target.dataset.searchinfo)
    });
});


// Retrieve from URL function
document.addEventListener('DOMContentLoaded', () => {
    const params = parseURLParams(window.location.href);

    if (params && 'cat' in params) {
        filter(params.cat);
    }

    filter('html/css');

});






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
function iterateThroughAllArticlesAndRemoveWithoutGivenList(categoriesSubcat){
    document.querySelectorAll(`#${articleId}`).forEach((article) => {
        if(article.dataset.categories){
            const categories = article.dataset.categories.split(",");
            let flag = false;
            categories.forEach((subCat)  =>{
                categoriesSubcat.forEach((acceptableElement) =>{
                    if(subCat == acceptableElement){
                        flag = true;
                        article.classList.remove('hidden');
                        return;
                    }
                });
                if(!flag){
                    article.classList.add('hidden');        
                }
            });
        } else {
            article.classList.add('hidden');
        }

    });
}