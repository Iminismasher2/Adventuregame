const friends = [
  {
    name: "Samuel",
    skill: "Taxes",
    rare: 10,
    epic: 2,
    legendary: 1
  },
  {
    name: "Ethan",
    skill: "Cooking",
    rare: 10,
    epic: 2,
    legendary: 1
  },
  {
    name: "Ryan",
    skill: "Swimming",
    rare: 10,
    epic: 2,
    legendary: 1
  },
  {
    name: "Ava",
    skill: "Pickpocketing",
    rare: 10,
    epic: 2,
    legendary: 1
  },
  {
    name: "Nicholas",
    skill: "Fist Fighting",
    rare: 10,
    epic: 2,
    legendary: 1
  }
];

// Function for random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Open Loot Box
function openLootBox() {
  // Get a random friend
  let randomFriend = friends[randomNumber(0, friends.length)];

  // Pick a random prize
  let randomPrize = randomNumber(0, 100);

  // Check how lucky the user is and pick the prize
  if (randomPrize <= randomFriend.legendary) {
    alert("You won Legendary Item!");
  } else if (randomPrize <= randomFriend.epic) {
    alert("You won Epic Item!");
  } else if (randomPrize <= randomFriend.rare) {
    alert("You won Rare Item!");
  } else {
    alert("You won Common Item!");
  }
}

// Click event for loot box button
document.querySelector(".btn-loot").addEventListener("click", openLootBox);
