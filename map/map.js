import { createLink, createSpan, returnResultsPage } from '../data/link.js';
import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';

const user = getUser();
console.log(user);

if (user.hp <= 0 || returnResultsPage(user)){
    window.location.replace('../results');
}

for (let quest of quests){
    if (user.completed[quest.id]){
        createSpan(quest);
    } else {
        createLink(quest);
    }
}