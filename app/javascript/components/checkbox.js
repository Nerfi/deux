const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
  // check if they have the shift key down
  // and  check taht they are checking it
  let inBetween = false
   if(e.shiftKey && this.checked) {

    // go ahead and do what we please
    // loope over every single check box
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // the opposite of itself
      }

      if(inBetween) {
        checkbox.checked = true;
      }

    });


   }
 lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
