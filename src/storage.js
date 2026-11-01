export function getHistory(){
    try{
        const result = JSON.parse(localStorage.getItem("history") ?? "[]");
        if (Array.isArray(result)) return result;
    }catch(err){
        return [];
    }
    return [];
}

export function saveSearch(name){
    let history = getHistory();
    history = history.filter( element => element.toLowerCase() !== name.toLowerCase());

    history.unshift(name);
    history = history.slice(0, 5);
    localStorage.setItem("history", JSON.stringify(history));
    return history;
}