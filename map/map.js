import { createLink, createSpan, returnResultsPage } from '../data/link.js';
import quests from '../data/quest-data.js';
import { getUser } from '../data/storage-utils.js';

const user = getUser();
console.log(user);
const userName = document.getElementById('user-name');
const userIcon = document.getElementById('user-icon');
const userGold = document.getElementById('user-gold');
const userHp = document.getElementById('user-hp');
userGold.textContent = `GOLD: ${user.gold}`;
userIcon.src = `../assets/${user.race}.png`;
userName.textContent = user.name.toUpperCase();
userHp.textContent = `HP: ${user.hp}`;

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