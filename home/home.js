import { createUser } from '../data/create-user.js';
import { setUser } from '../data/storage-utils.js';
const userForm = document.getElementById('user-form');

//get userForm name and race from form data

userForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const newUser = createUser(formData);
    setUser(newUser);
    window.location.replace('./map');
});