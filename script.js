const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);

let lastCheckbox;

function checkboxHandler(e) {
  if (lastCheckbox && e.shiftKey) {
    let shift = false;
    checkboxes.forEach((box) => {
      if (e.target === box || lastCheckbox === box) {
        shift = !shift;
      }
      if (shift) box.checked = true;
    });
  }

  lastCheckbox = e.target;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", checkboxHandler)
);
