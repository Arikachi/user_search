import {fetchUser} from './api.js';
import {renderUser, showLoading, showError, clearStatus} from './ui.js';

const form = document.getElementById("search-form");
const input = document.getElementById("input");
const button = document.querySelector(".submit");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = input.value.trim();
    if (!username) return;

    clearStatus();
    showLoading();
    button.disabled = true;

    try{
        const user = await fetchUser(username);
        clearStatus();
        renderUser(user);
    }catch(err){
        document.getElementById("result").replaceChildren();
        showError(err.message);
    }finally{

        button.disabled = false;
    }
});