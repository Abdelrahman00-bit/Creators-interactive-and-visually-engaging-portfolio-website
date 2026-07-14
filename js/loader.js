/**
 * File: loader.js
 * Description: Handles the loading sequence and asset synchronization.
 */

(function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const loaderFill = document.querySelector(".loader-bar-fill");
  const loaderText = document.querySelector(".loader-text");

  let progress = 0;

  // Simulate progressive loading for better UX
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += Math.random() * 10;
      if (progress > 90) progress = 90;
      updateProgress(progress);
    }
  }, 200);

  function updateProgress(val) {
    if (loaderFill) {
      loaderFill.style.width = val + "%";
    }
    if (loaderText) {
      loaderText.innerText = `Loading... ${Math.round(val)}%`;
    }
  }

  // The actual event that fires when all assets (images, css, etc.) are loaded
  window.addEventListener("load", () => {
    // Finish the progress bar to 100%
    clearInterval(interval);
    updateProgress(100);

    // Small delay to let the user see 100% before fading out
    setTimeout(() => {
      if (loaderWrapper) {
        loaderWrapper.classList.add("hidden");
      }
    }, 500);
  });
})();
