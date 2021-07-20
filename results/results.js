import { getUser } from '../data/storage-utils.js';

const user = getUser();
const result = document.getElementById('results-section');
console.log(user);

if (user.hp <= 0){
    const loss = document.createElement('span');
    const lossImage = document.createElement('img');
    lossImage.src = '../assets/loss.svg';
    lossImage.classList.add('loss');
    loss.textContent = `Sorry ${user.name}! Your HP is ${user.hp} YOU DIED! You had ${user.gold} gold tokens!`;
    result.append(loss, lossImage);
} else {
    const win = document.createElement('span');
    const winImage = document.createElement('img');
    winImage.classList.add('win');
    winImage.src = '../assets/win.jpeg';
    win.textContent = `YOU WON ${user.name.toUpperCase()}!!! Your HP is ${user.hp} and you collected ${user.gold} gold tokens!`;
    result.append(win, winImage);
}