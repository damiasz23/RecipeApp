import Search from './modules/Search';
import Recipe from './modules/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


const state = {};



// SEARCH CONTROLLER
const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);
        // UI fo result
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        //Search for reciepies
        await state.search.getRes();
        //Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        
    }
    
});

// RECIPE CONTROLLER

const r = new Recipe(35477);
r.getRecipe();
console.log(r);