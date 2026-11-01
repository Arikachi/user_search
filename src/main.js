import {fetchUser} from './api.js';
import {renderUser, showLoading, showError, clearStatus, renderHistory} from './ui.js';
import { getHistory, saveSearch } from './storage.js';

const form = document.getElementById("search-form");
const input = document.getElementById("input");
const button = document.querySelector(".submit");
const historyList = document.getElementById("history");

window.addEventListener("load", () => {
    renderHistory(getHistory());
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = input.value.trim();
    if (!username) return;

    search(username);
});

historyList.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (li === null) return;
    input.value = li.dataset.username;
    search(li.dataset.username);
});

async function search(username){
    if (button.disabled) return;
    clearStatus();
    showLoading();
    button.disabled = true;

    try{
        const user = await fetchUser(username);
        clearStatus();
        renderUser(user);

        const historyData = saveSearch(user.login);
        renderHistory(historyData);
    }catch(err){
        document.getElementById("result").replaceChildren();
        showError(err.message);
    }finally{
        button.disabled = false;
    }
}