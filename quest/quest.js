import quests from '../data/quest-data.js';
import { findById, getUser, setUser } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const question = document.getElementById('quest-question');
const choiceForm = document.getElementById('choice-form');
const choiceLabel = document.getElementById('choice-label');
const quest = findById(quests, searchParams.get('questId'));
const user = getUser();

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
choiceForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const choiceOption = new FormData(choiceForm);
    const answer = choiceOption.get('choice');
    const selected = findById(quest.choices, answer);
    user.hp += selected.hp;
    user.gold += selected.gold;
    user.completed[quest.title] = true;
    setUser(user);
    
    const question = document.getElementById('quest-question');
    const mapLink = document.getElementById('map-link');
    question.classList.add('hidden');
    choiceForm.classList.add('hidden');
    mapLink.classList.remove('hidden');
    const results = document.createElement('span');
    const resultsSpan = document.getElementById('results-span');
    results.textContent = selected.result;
    resultsSpan.appendChild(results);
});