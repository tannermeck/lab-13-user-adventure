export function createUser(formData){
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 35,
        gold: 0,
        completed: {}
    };
    return user;
}