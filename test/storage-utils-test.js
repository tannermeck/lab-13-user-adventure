import { getUser, setUser, findById } from '../data/storage-utils.js';

const test = QUnit.test;

test('should store the user in local storage with setUser and then remove item from local storage with getUser', expect => {
    const user = {
        name: 'Tanner',
        race: 'wizard',
        hp: 35,
        gold: 0,
        completed: {}
    };
    setUser(user);
    const expected = getUser();
    
    expect.deepEqual(user, expected);
});
test('should return an item when an id is matched to the items array using findById', expect => {
    const array = [{
        id: 'monsters',
        title: 'A Den of Monsters',
        description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?`
    },
    { id: 'dragon',
        title: 'A HAIRY!!! Dragon',
        description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?`
    }];
    const item = findById(array, array.monsters);
    expect.equal(array[0], item);
});