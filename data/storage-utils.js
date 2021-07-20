export function getUser(){
    const string = localStorage.getItem('USER');
    return JSON.parse(string);
}

export function setUser(object){
    localStorage.setItem('USER', JSON.stringify(object));
}

export function findById(array, id){
    for (let item of array){
        if (item.id === id){
            return item;
        }
    }
}