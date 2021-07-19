import quests from '../data/quest-data.js';
import { findById } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('questId'))

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const question = document.getElementById('quest-question');
const choiceForm = document.getElementById('choice-form');

//const quest = findById(quests, searchParams.get('questId'));

for (let choice of quest.choices){

}