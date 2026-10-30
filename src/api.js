export async function fetchUser(username) {
    const encodedUsername = encodeURIComponent(username);
    const url = `https://api.github.com/users/${encodedUsername}`;
    const res = await fetch(url);
    if (!res.ok){
        if(res.status === 404){
            throw new Error("User not found");    
        }else if(res.status === 403){
            throw new Error("Rate limit reached, try again later");
        }else{
            throw new Error("An error have occured");
        }
    }
    const userData = await res.json();
    return userData;
}