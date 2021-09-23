function madlibs() {
  // const story1 = "";
  // const story2 = "";

  let playerStory = prompt("Would you like Story One or Story Two?");

  if (playerStory == "1" || "storyOne" || "one") {
    let step1 = prompt("type an adjective");
    let step2 = prompt("type a general place");
    let step3 = prompt("type a vehicle name (plural)");
    let step4 = prompt("type the name of a game");
    let step5 = prompt("type a plural noun");
    let step6 = prompt("type an 'ing' verb");
    let step7 = prompt("type another 'ing' verb");
    let step8 = prompt("type a food name (plural)");
    let step9 = prompt("type the name of a sport");
    let step10 = prompt("type another 'ing' verb");
    let step11 = prompt("type an emotion");
    let step12 = prompt("type a number");

    console.log("A vacation is when you take a trip to some " + step1 + " place near an amazing " + step2 + ". A good vacation place is one where you can ride " + step3 + " or play " + step4 + " or go hunting for " + step5 + ". I like to spend my time " + step6 + " or " + step7 + ". When parents go on a vacation, they spend their time eating three " + step8 + " a day. Usually, fathers play " + step9 + ", and mothers spend their time " + step10 + ". Adults need vacations more than kids because adults are always very " + step11 + " because they have to work " + step12 + " hours every day all year just to afford their vacations!");
  }
  else if (playerStory == "2" || "storyTwo" || "two") {
    let step1 = prompt("type an adjective");
    let step2 = prompt("type a famous place");
    let step3 = prompt("type a plural noun");
    let step4 = prompt("type another adjective");
    let step5 = prompt("type a food (plural)");
    let step6 = prompt("type an emotion");
    let step7 = prompt("type an 'ing' verb");
    let step8 = prompt("type a common place");
    let step9 = prompt("type another adjective");
    let step10 = prompt("type a noun");
    let step11 = prompt("type another adjective");
    let step12 = prompt("type another noun");
    let step13 = prompt("type a family member");
    let step14 = prompt("type another adjective");

    console.log("Today we took a " + step1 + " fieldtrip to " + step2 + ". They're famous for making " + step3 + " and for cooking " + step4 + " " + step5 + ". Eating all that food made me feel " + step6 + ". Next we enjoyed the local tradition of " + step7 + " in the middle of the " + step8 + "! Finally, we went shopping for souvenirs. I bought a " + step9 + " " + step10 + " for myself, and a " + step11 + " " + step12 + " for my favorite " + step13 + " . I'll definitely never forget this " + step14 + " trip!");
  }
}

madlibs();
