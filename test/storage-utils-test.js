import { getUser, setUser } from '../data/storage-utils.js';

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