import axios from 'axios';


async function getRes(query) {
    const key = 'd9696833f4ca33270a750b41ef7e770a';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
}
getRes('pizza');


