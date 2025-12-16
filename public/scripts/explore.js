const articleId = 'article';



// Retrieve from URL function
document.addEventListener('DOMContentLoaded', () => {
    const params = parseURLParams(window.location.href);

    console.log(params);
    filter("HTML / CSS");
});





// Filter takes a category type shit or something man i fucking hate writing comments just fucking look at the code dumbass
async function filter(category){
    const JSON = await fetchJSON();
    const list = returnOnlySubcategoriesFromJSON(JSON, category);
    console.log(list);
    iterateThroughAllArticlesAndRemoveWithoutGivenList();


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
function iterateThroughAllArticlesAndRemoveWithoutGivenList(){
    document.querySelectorAll(`#${articleId}`).forEach((article) => {
        if(article.dataset.categories){
            const categories = article.dataset.categories.split(",");
            console.log(categories);
        } else {
            article.classList.add('hidden');
        }

    });
}