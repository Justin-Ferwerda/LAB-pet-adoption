import renderToDom from "./renderToDom.js";


const buttons = () => {
  const domString = `  
  <div class="d-flex flex-wrap justify-content-between my-3">
  <button class="btn btn-secondary btn-lg buttonRow" id="cat">Cats</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dog">Dogs</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="dino">Dinos</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="select-all">Select All</button>
  
  </div>
  `
  renderToDom('#btn-container', domString)
};

export default buttons;
