import { createUser } from '../data/create-user.js';

const test = QUnit.test;

test('should return a user generated from createUser', expect => {
    const user = {
        name: 'Tanner',
        race: 'wizard',
        hp: 35,
        gold: 0,
        completed: {}
    };
    const userData = new FormData();

    userData.set('name', 'Tanner');
    userData.set('race', 'wizard');
    const expected = createUser(userData);
    
    expect.deepEqual(user, expected);
});