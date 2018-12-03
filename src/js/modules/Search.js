import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async  getRes() {
        const key = 'd9696833f4ca33270a750b41ef7e770a';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            
        }catch (error) {
            alert(error);
        } 
    }
}