import renderToDom from "./renderToDom.js";



const renderCards = (array) => {
  let domString = "";
  array.forEach((memberobj) => {
  
    domString += `<div class="card" style="width: 18rem;">
    <div class="header">${memberobj.name}</div>
    <img src="${memberobj.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="pet-color">
        <p>${memberobj.color}</p>
      </div>  
      <div class="special-skill">
      <p>${memberobj.specialSkill}</p>
      </div>  
    </div>
    <div class="footer">${memberobj.type}
      <div>
        <button class="btn btn-danger" id="delete--${memberobj.name}">X</button>
      </div>
    
    </div>
    
    </div>
    `
  })
renderToDom(".cards", domString);
};

export default renderCards;
