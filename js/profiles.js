/**
 * File: profiles.js
 * Description: Handles the visibility and interaction of the profiles gallery wrapper.
 */

(function () {
  // Select the wrapper that contains the profile cards
  const profilesWrapper = document.querySelector(".warpper");
  // Select all navigation buttons to trigger the visibility change
  const startButtons = document.querySelectorAll(".js-btn");

  /**
   * Toggles the visibility of the profiles wrapper based on the button clicked.
   * @param {Event} event - The click event object.
   * @param {number} index - The index of the clicked button.
   */
  const handleProfilesVisibility = (event, index) => {
    event.preventDefault(); // Prevent default anchor jump behavior

    // If the first button ("About Us") is clicked, show the profiles
    if (index === 0) {
      if (profilesWrapper) {
        profilesWrapper.classList.add("active");
      }
    }
  };

  // Initialize event listeners for each navigation button
  startButtons.forEach((button, index) => {
    button.addEventListener("click", (event) =>
      handleProfilesVisibility(event, index),
    );
  });
})();
