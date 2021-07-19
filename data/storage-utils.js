export function getUser(){
    const string = localStorage.getItem('USER');
    return JSON.parse(string);
}

export function setUser(object){
    localStorage.setItem('USER', JSON.stringify(object));
}