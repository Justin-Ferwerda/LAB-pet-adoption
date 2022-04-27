import pets from "./data.js";
import renderCards from "./renderCards.js";


const eventListeners = () => {
  
  const formModal = new bootstrap.Modal(document.querySelector('#create-pet'));

  document.querySelector('#btn-container').addEventListener('click', (e) => {
    if (e.target.id === 'select-all') {
      renderCards(pets)
    } else if (e.target.id) {
      const petFilter = pets.filter(pet => pet.type === e.target.id)
      renderCards(petFilter)
    }
  
  });


  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPet = {
      name: document.querySelector('#name').value,
      color: document.querySelector('#color').value,
      specialSkill: document.querySelector('#specialSkill').value,
      type: document.querySelector('#type').value,
      imageURL: document.querySelector('#imageURL').value
    }

    pets.push(newPet)
    renderCards(pets)

    formModal.hide()
    form.reset()
  })

  document.querySelector('.cards').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, name] = e.target.id.split('--')

      const index = pets.findIndex(object => object.name === name)

      if (e.target.id.includes('delete')) {
        pets.splice(index, 1)
        renderCards(pets)
      }
    }
  })
  
};

export default eventListeners;
