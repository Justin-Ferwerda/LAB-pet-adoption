import renderToDom from "./renderToDom.js";

const addPetModal = () => {
  const domString = `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#create-pet">
    Add Pet   
    </button>
    <!-- Modal -->
    <div class="modal fade" id="create-pet" tabindex="-1" aria-labelledby="create-pet" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen-md-down">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Pet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" id="modal-body">
          <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="name" id="name" aria-label="name" required>
            <label for="name">Your Pet's Name</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="color" id="color" aria-label="color" required>
            <label for="color">Color</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="specialSkill" id="specialSkill" aria-label="specialSkill" required>
            <label for="color">Special Skill</label>
          </div>
      
          <div class="form-floating mb-3">
            <select class="form-select form-control-lg" id="type" aria-label="type" required>
              <option value="">Select a type</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="dino">Dino</option>
              
            </select>
            <label for="type">Type</label>
          </div>

          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="imageURL" id="imageURL" aria-label="imageURL" required>
            <label for="color">Link your pet's image!</label>
          </div>
          
      
          <button 
            type="submit" 
            class="btn btn-success" 
          >
            Submit
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  `;
  renderToDom('#create-pet-btn', domString);
};

export default addPetModal;
