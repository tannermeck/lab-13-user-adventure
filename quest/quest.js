import quests from '../data/quest-data.js';
import { findById } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const question = document.getElementById('quest-question');
const choiceForm = document.getElementById('choice-form');
const choiceLabel = document.getElementById('choice-label');

const quest = findById(quests, searchParams.get('questId'));
questTitle.textContent = quest.title;
questImage.src = `../assets/${quest.image}`;
question.textContent = quest.description;

for (let choice of quest.choices){
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;
    const span = document.createElement('span');
    span.textContent = choice.description;

    choiceLabel.append(input, span);
    choiceForm.appendChild(choiceLabel);

}