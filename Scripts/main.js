
import pets from "./data.js";
import renderCards from "./renderCards.js";
import buttons from "./buttons.js";
import addPetModal from "./addPetModal.js";
import eventListeners from "./eventListeners.js";

function startApp () {
  addPetModal()
  renderCards(pets)
  buttons()
  eventListeners()
}

startApp()
