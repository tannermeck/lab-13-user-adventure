import quests from '../data/quest-data.js';

const questOption = document.getElementById('quest-option');
for (let quest of quests){
    
    const aTag = document.createElement('a');
    const questHref = `./quests/?id=${quest.id}`;
    aTag.href = questHref;
    aTag.textContent = quest.title;

    questOption.appendChild(aTag);
}