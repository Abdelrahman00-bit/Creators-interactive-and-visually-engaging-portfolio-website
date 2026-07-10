/**
 * File: contact.js
 * Description: Handles the visibility and interaction of the contact section.
 */

(function () {
  // Select the wrapper that contains the contact content
  const contactWrapper = document.querySelector(".contact-wrapper");
  // Select all navigation buttons
  const startButtons = document.querySelectorAll(".js-btn");

  /**
   * Toggles the visibility of the contact wrapper.
   * @param {Event} event - The click event object.
   * @param {number} index - The index of the clicked button.
   */
  const handleContactVisibility = (event, index) => {
    event.preventDefault();

    // Index 2 corresponds to the "Contact" button
    if (index === 2) {
      if (contactWrapper) {
        contactWrapper.classList.add("active");
      }
    }
  };

  // Initialize event listeners for each navigation button
  startButtons.forEach((button, index) => {
    button.addEventListener("click", (event) =>
      handleContactVisibility(event, index),
    );
  });
})();
