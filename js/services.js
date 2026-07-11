/**
 * File: services.js
 * Description: Handles the visibility and interaction of the services skill tree.
 */

(function () {
  // Select the wrapper that contains the services content
  const servicesWrapper = document.querySelector(".services-wrapper");
  // Select all navigation buttons
  const startButtons = document.querySelectorAll(".js-btn");

  /**
   * Toggles the visibility of the services wrapper.
   * @param {Event} event - The click event object.
   * @param {number} index - The index of the clicked button.
   */
  const handleServicesVisibility = (event, index) => {
    event.preventDefault();

    // Index 1 corresponds to the "Services" button
    if (index === 1) {
      if (servicesWrapper) {
        servicesWrapper.classList.add("active");
      }
    }
  };

  // Initialize event listeners for each navigation button
  startButtons.forEach((button, index) => {
    button.addEventListener("click", (event) =>
      handleServicesVisibility(event, index),
    );
  });

  // Handle the back button logic to return to the menu
  const servicesBackBtn = document.querySelector(".services-back-btn");
  if (servicesBackBtn) {
    servicesBackBtn.addEventListener("click", () => {
      // 1. Hide the services wrapper
      if (servicesWrapper) {
        servicesWrapper.classList.remove("active");
      }

      // 2. Reset the navigation buttons so they are visible again
      startButtons.forEach((button) => {
        button.classList.remove("chosen-effict");
        button.classList.remove("clicked-btn");
      });
    });
  }
})();
