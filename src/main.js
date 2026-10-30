import {fetchUser} from './api.js';

const form = document.getElementById("search-form");
const input = document.getElementById("input");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = input.value.trim();
    if (!username) return;

    try{
        const user = await fetchUser(username);
        console.log(user.login);
    }catch(err){
        console.error(err.message);
    }
});