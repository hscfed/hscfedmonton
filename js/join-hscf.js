// Add Event Listeners to all drop-btns
const dropBtns = document.querySelectorAll('.drop-btn');
for (let i = 0; i < dropBtns.length; i++) {
  dropBtns[i].addEventListener('click', toggleDropBody);
}

// Toggle Drop Body
function toggleDropBody(e) {
  const dropBtnEl = e.currentTarget;
  const targetId = dropBtnEl.dataset.target;
  const dropBodyEl = document.querySelector(targetId);

  // Toggle Drop Body Display
  dropBodyEl.classList.toggle('show-drop-body');

  // Toggle Chevron Spin
  const iconEl = dropBtnEl.querySelector('i');
  iconEl.classList.toggle('spin');


}