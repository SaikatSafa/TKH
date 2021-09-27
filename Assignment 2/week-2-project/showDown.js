function fight() {
  // let monster = prompt("What monster are you fighting?");
  // let hero = prompt("Who is your hero?");
  let villianHealth = 50;
  let heroHealth = 50;

  while (villianHealth > 0 || heroHealth > 0) {
    villianHealth -= 0;
    heroHealth -= 0;
    // console.log("Villian Health = " + villianHealth);
    // console.log("Hero Health = " + heroHealth);
    // console.log("");

    let heroRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    let villianRoll = Math.floor(Math.random() * (20 - 1 + 1) + 1);

    if (heroHealth > 0 || villianHealth > 0) {
      if (villianRoll <= 2) {
        heroHealth -= 5;
        console.log("[-5] Villian hit's hero.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else if (villianRoll <= 10) {
        heroHealth -= 0;
        console.log("[-0] Villian hit's hero, but misses.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else if (villianRoll <= 18) {
        heroHealth -= 10;
        console.log("[-10] Villian hit's hero.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else {
        heroHealth -= 20;
        console.log("[-20] Villian hit's hero.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }

      if (heroRoll <= 2) {
        villianHealth -= 5;
        console.log("[+5] Hero hit's villian.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else if (heroRoll <= 10) {
        villianHealth -= 0;
        console.log("[+0] Hero hit's villian, but missess.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else if (heroRoll <= 18) {
        villianHealth -= 10;
        console.log("[+10] Hero hit's villian.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
      else {
        villianHealth -= 20;
        console.log("[+20] Hero hit's villian.");
        console.log("Villian Health = " + villianHealth);
        console.log("Hero Health = " + heroHealth);
        console.log("")
      }
    }
    // else if (heroHealth <= 0 || villianHealth <= 0)
    else {
      return;
      // console.log("Villian Health = " + villianHealth);
      // console.log("Hero Health = " + heroHealth);
      // console.log("");
    }
  }
}

fight();
