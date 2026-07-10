/**
 * File: navigation.js
 * Description: Handles the interactive behaviors and animations of the navigation menu.
 */

(function() {
  // Select all navigation buttons
  const startButtons = document.querySelectorAll(".js-btn");
  
  // Store buttons for reference during animation cycles
  let buttonStore = [];
  const button2 = document.querySelector(".btn-2");
  const button3 = document.querySelector(".btn-3");

  /**
   * Handles the animation effect when a navigation button is clicked.
   * @param {Event} event - The click event object.
   */
  const handleNavAnimation = (event) => {
    // Add clicked class to the target button
    event.target.classList.add("clicked-btn");
    
    // Trigger the 'chosen-effict' animation across buttons
    if (buttonStore[0]) {
      buttonStore[0].classList.add("chosen-effict");
    }
    if (button2) button2.classList.toggle("chosen-effict");
    if (button3) button3.classList.toggle("chosen-effict");
  };

  // Initialize event listeners for each navigation button
  startButtons.forEach((button) => {
    buttonStore.push(button);
    button.addEventListener("click", handleNavAnimation);
  });
})();
