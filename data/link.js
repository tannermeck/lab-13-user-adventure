import quests from './quest-data.js';

export function createLink(quest){
    const questOption = document.getElementById('quest-option');
    const aTag = document.createElement('a');
    const questHref = `../quest/?questId=${quest.id}`;
    aTag.href = questHref;
    aTag.textContent = quest.title;
    questOption.appendChild(aTag);
}
export function createSpan(quest){
    const span = document.createElement('span');
    span.innerText = `${quest.title} COMPLETED`; 
    const questOption = document.getElementById('quest-option');
    questOption.appendChild(span);
}
export function returnResultsPage(user) {
    for (let quest of quests)
        if (!user.completed[quest.id]){
            return false;
        }
    return true;
}