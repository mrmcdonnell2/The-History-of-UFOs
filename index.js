// Get modal element
const modal = document.querySelector('#simpleModal');
// Get open modal button
const modalBtn = document.querySelector('#modal-btn');
// Get close button
const closeBtn = document.querySelector('.closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open the modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close the modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}