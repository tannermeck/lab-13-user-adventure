import quests from '../data/quest-data.js';

const questOption = document.getElementById('quest-option');
for (let quest of quests){
    
    const aTag = document.createElement('a');
    const questHref = `../quest/?questId=${quest.id}`; // what does this do?
    aTag.href = questHref;
    aTag.textContent = quest.title;

    questOption.appendChild(aTag);
}