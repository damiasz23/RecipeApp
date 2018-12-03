import Search from './modules/Search';


const state = {};

const controlSearch = async () => {
    const query = 'pizza' // TODO in view 

    if (query) {
        state.search = new Search(query);
        // UI fo result

        //Search for reciepies
        await state.search.getRes();
        //Render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});