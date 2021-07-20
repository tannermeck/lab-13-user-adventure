import { returnResultsPage } from '../data/link.js';

const test = QUnit.test;

test('should return true if a user completes all quests', expect => {
    const user = {
        completed: {
            army: true,
            steal: true,
            princess: true
        }
    };

    const expected = returnResultsPage(user);
    
    expect.equal(true, expected);
});
test('should return false if a user completes all quests', expect => {
    const user = {
        completed: {
            army: true,
        }
    };

    const expected = returnResultsPage(user);
    
    expect.equal(false, expected);
});