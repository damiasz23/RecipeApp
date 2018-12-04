import Search from './modules/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';


const state = {};

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
