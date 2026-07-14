/**
 * File: game.js
 * Description: Handles the logic for the Infinite Leaf Collection mini-game.
 */

(function () {
  let score = 0;
  let gameInterval;
  let isGameActive = false;

  const gameWrapper = document.querySelector(".game-wrapper");
  const basketContainer = document.querySelector(".basket-container");
  const scoreDisplay = document.querySelector(".game-score");

  /**
   * Starts the infinite game loop
   */
  function startGame() {
    score = 0;
    if (basketContainer) {
      const leaves = basketContainer.querySelectorAll(".basket-leaf");
      leaves.forEach(l => l.remove());
    }
    updateScore();
    resumeGame();
  }

  /**
   * Resumes the game loop without resetting the score
   */
  function resumeGame() {
    if (!isGameActive) {
      isGameActive = true;
      gameInterval = setInterval(spawnLeaf, 1500);
    }
  }

  /**
   * Stops the game loop
   */
  function stopGame() {
    clearInterval(gameInterval);
    isGameActive = false;
  }

  /**
   * Creates a leaf at a random position and starts the falling animation
   */
  function spawnLeaf() {
    if (!isGameActive) return;

    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    
    const img = document.createElement("img");
    img.src = "images/vecteezy_decorative-leaf-design_70938019.png";
    img.alt = "pixel leaf";
    leaf.appendChild(img);
    
    const randomX = Math.random() * 90; 
    leaf.style.left = randomX + "vw";
    
    const duration = Math.random() * 4 + 6;
    leaf.style.animation = `fall ${duration}s linear forwards`;

    leaf.addEventListener("click", () => {
      // Trigger the "pop" animation defined in game.css
      leaf.classList.add("leaf-collected");
      
      // Wait for the animation to finish (0.3s) before removing and updating score
      setTimeout(() => {
        score++;
        updateScore();
        addLeafToBasket();
        leaf.remove();
      }, 300);
    });

    leaf.addEventListener("animationend", () => {
      leaf.remove();
    });

    gameWrapper.appendChild(leaf);
  }

  /**
   * Adds a small leaf image to the basket visually
   */
  function addLeafToBasket() {
    if (!basketContainer) return;

    const leafImg = document.createElement("img");
    leafImg.src = "images/vecteezy_decorative-leaf-design_70938019.png";
    leafImg.classList.add("basket-leaf");

    const randomLeft = Math.random() * 90 + 5; 
    const pileHeight = Math.min(score * 2, 45);
    const randomBottom = pileHeight + (Math.random() * 5);

    leafImg.style.left = randomLeft + "%";
    leafImg.style.bottom = randomBottom + "px";
    leafImg.style.transform = `rotate(${Math.random() * 360}deg)`;

    basketContainer.appendChild(leafImg);
  }

  /**
   * Updates the score
   */
  function updateScore() {
    if (scoreDisplay) {
      scoreDisplay.innerText = `Leaves: ${score}`;
    }
  }

  // Auto-start the game when the script loads
  startGame();

  // Handle tab switching to prevent leaf accumulation and lag
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopGame();
    } else {
      // Only resume if the game was meant to be active
      // Since it's a background game, we resume it automatically
      resumeGame();
    }
  });
})();



