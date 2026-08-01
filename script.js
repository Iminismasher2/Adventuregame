// ==========================================
// 🔐 DIRECT PROFILE CONFIGURATION
// ==========================================
const MASTER_ID = "Syndicate99";
const MASTER_PASSWORD = "Password123";

// ==========================================
// 📡 DATABASE CONFIGURATION LINK
// ==========================================
const DATABASE_API_URL = "https://adventuregame-1dc643-default-rtdb.firebaseio.com/lockouts.json";

// ==========================================
// 🛠️ DYNAMIC SUB-CATEGORY OPTIONS CONFIGURATION
// ==========================================
const subCategories = {
    patron: ["Terra Nova", "Zul'Kari Prime"],
    race: ["Human", "Elf", "Goblin", "Boss"],
    class: ["Fighter", "Mage"],
    motivation: ["Revenge", "Glory"]
};

// ==========================================
// 📦 LOOT TABLES DATA STRUCTURE
// ==========================================
const lootTables = {
    patron: {
        "Terra Nova": {
            Bronze: [
                { name: "Terra Iron Rations", image: "https://placehold.co", ability: "Provides basic baseline nourishment for 3 days." },
                { name: "Scout Compass", image: "https://placehold.co", ability: "Points strictly north on terrestrial planets." }
            ],
            Silver: [],
            Gold: [],
            Platinum: [],
            Legendary: [],
            Celestial: []
        },
        "Zul'Kari Prime": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    race: {
        "Human": { Bronze: [
            { name: "Leather chestplate and bracers", image: "https://i.imgur.com/lX3q611.jpeg", ability: "Provides basic protection.", weight: 10 },
                { name: "Knuckle Dusters", image: "https://i.imgur.com/j4uQzYx.jpeg", ability: "A set of bronze knuckle dusters, good for brawling", weight: 15 },
                { name: "Focusing Cigar", image: "https://i.imgur.com/NtUq9Yt.jpeg", ability: "This magical cigar will give an additional die on Notice, Tempt, or Scholarship for your next roll.", weight: .99 },
                { name: "Chicken Bomb", image: "https://i.imgur.com/VzZeeAB.jpeg", ability: "A bomb... of a chicken?! Deals an injury to those in a 35 ft radius when it goes off, though you do have to crank it.", weight: 2 },
                { name: "Fists of Fury", image: "https://i.imgur.com/FeuKqnz.jpeg", ability: "(Unique item) A common magic item that will deal extra damage the more FIRED UP you are in a fight! Will deal 1 extra damage if you are FIRED UP!!", isUnique: true, weight: .01 },
                { name: "Rations (1 day) x6", image: "https://i.imgur.com/ECtwIS0.jpeg", ability: "Pig.", weight: 17 },
                { name: "Ring of agility", image: "https://i.imgur.com/oARlWkt.jpeg", ability: "A ring that, once put on, will give an extra 10 ft of movement per turn.", weight: 2 },
                { name: "Health Potion", image: "https://i.imgur.com/6PUUvl7.jpeg", ability: "A potion that heals most minor to major injuries at least partially. Tastes terrible though, unless you're into terrible things like you.", weight: 28 },
                { name: "Healing pack", image: "https://i.imgur.com/6PUUvl7.jpeg", ability: "All your medical needs so your friend doesn't bleed out as the lava spitting llama had 'aimbot' or whatever you all call it. Not like it will help.", weight: 5 },
                { name: "Bandages", image: "https://i.imgur.com/XyDrNAQ.jpeg", ability: "Single roll of bandages, so helpful right?", weight: 10 },
                { name: "Torch", image: "https://i.imgur.com/R8CAN2F.jpeg", ability: "Many watchers from home had an issue where they simply could not see crawlers in the dark part of the dungeons (Because we don't care about you), so we made sure to implement light-making devices in most lootboxes!", weight: 10 },


            
        ], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Elf": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Goblin": { Bronze: [{ name: "Twig Charm", image: "https://placehold.co", ability: "Minor tracking buffs in deep woodlands." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Boss": { Bronze: [{ name: "Hush darts", image: "https://i.imgur.com/d4G8yCU.jpeg", ability: "3 darts, that once thrown into someone will prevent them from speaking, talking, or hearing for a minute. Once used, the dart dissolves.", weight: 1 },
                           { name: "Crab Pendant", image: "https://i.imgur.com/Yovece6.jpeg", ability: "Once the gem is broken, a massive iron crab spawns as a temporary spawn to attack the enemies for the combat. Desummoning afterwards and the pendant becoming useless", weight: 1 },
                           { name: "Corpse mask", image: "https://i.imgur.com/X9PFd87.jpeg", ability: "This is a single use item, don't mind the image. You can imitate someones appearnce that is dead for upwards of 24 hours, afterwards the mask burns away.", weight: 1 },
                           { name: "Friction wraps", image: "https://i.imgur.com/GVQFZum.jpeg", ability: "Hits deal additional fire damage the more you squeeze the leather.", weight: 1 },
                           { name: "Monster Compass", image: "https://i.imgur.com/7Z62AZQ.jpeg", ability: "(Unique item) Can only be used on 1 floor, use it wisely.", weight: 0.33333333333, isUnique: true },
                           { name: "Replacement Man", image: "https://i.imgur.com/eOK1zPt.jpeg", ability: "(Unique item) If you were to die, you survive barely (a shame).", weight: 0.33333333333, isUnique: true },
                           { name: "Invisibility Timer", image: "https://i.imgur.com/gzO8T8p.jpeg", ability: "This has 3 uses overrall, where it will then blow up (small explosion, don't worry).", weight: 5 },
                           { name: "Matress of comfortability", image: "https://i.imgur.com/KivTXVo.jpeg", ability: "Feels like the most comfy bed you've ever slept on, except its not and you are in a murder tv show. Happy dreaming!", weight: 1 },
                           { name: "Droplet charm", image: "https://i.imgur.com/i6TDMYp.jpeg", ability: "(Unique Item) Would not... break that charm, no matter his demands (He's lying)", weight: 0.33333333333, isUnique: true },
                           { name: "Head of BOOM!", image: "https://i.imgur.com/hUniWEY.jpeg", ability: "More head (people), more explosion! Explosion big damage, cap 3 most damage.", weight: 14 },
                           { name: "Axegun", image: "https://i.imgur.com/K7da1im.jpeg", ability: "A hand axe that shoots... like a gun, preeetttyyy self-explanatory.", weight: 5 },
                           { name: "Peace Pipe", image: "https://i.imgur.com/Nz9E2oH.jpeg", ability: "Ooohhh yeah thats that good shit, getting someone to smoke this will give 2 die when using tempt towards them.", weight: 25 },
                           { name: "Container of Heat and Frost", image: "https://i.imgur.com/wDxGwJw.jpeg", ability: "Magic Thermoflask.", weight: 15 },
                           { name: "Ring of Rock Eating", image: "https://i.imgur.com/heXTkjU.jpeg", ability: "Honestly, this is useless, we just wanted to appeal to rock-eating people watching the show.", weight: 20 },
                           { name: "Decanter of infinite bees", image: "https://i.imgur.com/KiwqVKW.jpeg", ability: "A lot of bees... like a LOT of bees.", weight: 10 },
                          ], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    class: {
        "Fighter": { Bronze: [{ name: "Whetstone Kit", image: "https://placehold.co", ability: "Maintains weapons cleanly." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Mage": { Bronze: [{ name: "Ink & Quill", image: "https://placehold.co", ability: "Logging system notes." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    motivation: {
        "Revenge": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Glory": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    looter: {
        Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },

    pet: { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
};

const tierList = ["Bronze", "Silver", "Gold", "Platinum", "Legendary", "Celestial"];
const categoriesList = ["patron", "race", "class", "motivation", "looter", "pet"];

// Master dynamic network toggle array map tracker
let serverStates = {
    Bronze: true, Silver: true, Gold: true, Platinum: true, Legendary: true, Celestial: true,
    cat_patron: true, cat_race: true, cat_class: true, cat_motivation: true, cat_looter: true, cat_pet: true
};

// DOM Layout Selectors
const categorySelect = document.getElementById('category-select');
const subCategorySelect = document.getElementById('sub-category-select');
const subCategoryLabel = document.getElementById('sub-category-label');
const tierSelect = document.getElementById('tier-select');
const spinBtn = document.getElementById('spin-btn');
const scroller = document.getElementById('case-scroller');
const lockoutNotice = document.getElementById('lockout-notice');

const placeholderText = document.getElementById('placeholder-text');
const lootDisplayContainer = document.getElementById('loot-display-container');
const itemRatingBadge = document.getElementById('item-rating-badge');
const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');
const itemAbility = document.getElementById('item-ability');

// Admin UI Selectors
const adminTriggerBtn = document.getElementById('admin-trigger-btn');
const loginModal = document.getElementById('login-modal');
const loginCancelBtn = document.getElementById('login-cancel-btn');
const loginSubmitBtn = document.getElementById('login-submit-btn');
const adminIdInput = document.getElementById('admin-id-input');
const adminPassInput = document.getElementById('admin-pass-input');
const loginStatusMsg = document.getElementById('login-status-msg');

const adminPanel = document.getElementById('admin-panel');
const adminPanelHeader = document.getElementById('admin-panel-header');
const closePanelBtn = document.getElementById('close-panel-btn');

const labelMapping = { patron: "🌍 Select Race Homeworld:", race: "🧬 Select Your Race:", class: "⚔️ Select Your Class:", motivation: "🔥 Select Motivation:", looter: "-", pet: "-" };
const nameMapping = { patron: "Patron (Race Homeworld)", race: "Your Character Race", class: "Character Class", motivation: "Character Motivation", looter: "Looter Box", pet: "Pet Box" };

// Rebuilds the primary Category dropdown options menu item array dynamically based on cloud values
function updateCategoryDropdownOptions() {
    const currentSelection = categorySelect.value;
    categorySelect.innerHTML = "";
    
    let activeCategoriesCount = 0;
    
    categoriesList.forEach(catKey => {
        const isAllowed = serverStates[`cat_${catKey}`] !== false;
        if (isAllowed) {
            const opt = document.createElement('option');
            opt.value = catKey;
            opt.textContent = nameMapping[catKey];
            categorySelect.appendChild(opt);
            activeCategoriesCount++;
        }
    });
    
    if (activeCategoriesCount === 0) {
        const opt = document.createElement('option');
        opt.value = "none";
        opt.textContent = "⚠️ All Options Locked by DM";
        categorySelect.appendChild(opt);
        subCategorySelect.innerHTML = "";
        subCategoryLabel.textContent = "Locked Element Handler:";
        spinBtn.disabled = true;
        return;
    }

    // Retain previous choice safely if it still exists in public visibility scope arrays
    if (serverStates[`cat_${currentSelection}`] !== false && currentSelection !== "") {
        categorySelect.value = currentSelection;
    }
    
    updateSubCategories();
}

function updateSubCategories() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory === "none" || !subCategories[selectedCategory]) {
        subCategorySelect.innerHTML = "";
        return;
    }
    
    subCategoryLabel.textContent = labelMapping[selectedCategory];
    subCategorySelect.innerHTML = "";
    
    subCategories[selectedCategory].forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option;
        optElement.textContent = option;
        subCategorySelect.appendChild(optElement);
    });
    checkActiveTierStatus();
}

function checkActiveTierStatus() {
    if (categorySelect.value === "none") {
        spinBtn.disabled = true;
        return;
    }
    const selectedTier = tierSelect.value;
    const isAllowed = serverStates[selectedTier];
    
    if (isAllowed === false) {
        spinBtn.disabled = true;
        lockoutNotice.classList.remove('hidden');
    } else {
        spinBtn.disabled = false;
        lockoutNotice.classList.add('hidden');
    }
}

function syncFromCloudDatabase() {
    if (!DATABASE_API_URL || DATABASE_API_URL.includes("your-project-id")) return;
    
    fetch(DATABASE_API_URL)
        .then(res => res.json())
        .then(data => {
            if (data) {
                serverStates = data;
                
                // Sync Tiers Checkboxes
                tierList.forEach(t => {
                    const cb = document.getElementById(`sw-${t}`);
                    if (cb) cb.checked = (data[t] !== false);
                });
                
                // Sync Categories Checkboxes
                categoriesList.forEach(c => {
                    const cb = document.getElementById(`sw-cat-${c}`);
                    if (cb) cb.checked = (data[`cat_${c}`] !== false);
                });
                
                updateCategoryDropdownOptions();
            }
        }).catch(err => console.log("Database read error:", err));
}

function pushLockoutStateToCloud() {
    if (!DATABASE_API_URL || DATABASE_API_URL.includes("your-project-id")) return;
    
    fetch(DATABASE_API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverStates)
    }).catch(err => console.log("Database write error:", err));
}

// ==========================================
// 🕹️ CS:GO CAROUSEL ENGINE LOGIC
// ==========================================
// We track unique items that have been wiped out in this master memory map
let serverUniqueWipedItems = {};

function spinLootBox() {
    const tier = tierSelect.value;
    const category = categorySelect.value;
    const subCategory = subCategorySelect.value;
    
    if (serverStates[tier] === false || category === "none") return; 
    let rawPool = lootTables[category]?.[subCategory]?.[tier];
    if (!rawPool || rawPool.length === 0) { alert(`No items programmed inside the [${tier}] table.`); return; }
    
    // ==========================================
    // 🛡️ UNIQUE ITEM FILTERING LAYER
    // ==========================================
    // Dynamically filter out any unique items that have already been unboxed globally
    let winningPool = rawPool.filter(item => {
        const itemGlobalKey = `${category}_${subCategory}_${tier}_${item.name.replace(/\s+/g, '_')}`;
        return serverUniqueWipedItems[itemGlobalKey] !== true;
    });

    if (winningPool.length === 0) {
        alert(`All items (including Uniques) have been claimed from the [${tier}] crate for this option!`);
        return;
    }
    // ==========================================

    // ==========================================
    // 🎲 WEIGHTED RANDOM SELECTION ENGINE
    // ==========================================
    let totalWeight = 0;
    winningPool.forEach(item => {
        totalWeight += (item.weight || 1); 
    });

    let randomRoll = Math.random() * totalWeight;
    let winnerItem = winningPool[0]; 

    for (let i = 0; i < winningPool.length; i++) {
        randomRoll -= (winningPool[i].weight || 1);
        if (randomRoll <= 0) {
            winnerItem = winningPool[i];
            break;
        }
    }
    // ==========================================

    spinBtn.disabled = true; lootDisplayContainer.classList.add('hidden'); placeholderText.classList.remove('hidden');
    placeholderText.textContent = "Unboxing crate...";
    
    scroller.innerHTML = ""; scroller.style.transition = "none"; scroller.style.transform = "translateX(0px)";
    const totalItemsCount = 30; const winningIndex = 25; scroller.offsetHeight;

    for (let i = 0; i < totalItemsCount; i++) {
        let displayItem, displayTier;
        if (i === winningIndex) { displayItem = winnerItem; displayTier = tier; }
        else {
            displayTier = tierList[Math.floor(Math.random() * tierList.length)];
            const fillerPool = getFillerItemPool(category, subCategory, displayTier) || winningPool;
            displayItem = fillerPool[Math.floor(Math.random() * fillerPool.length)];
        }
        const slot = document.createElement('div'); slot.className = `carousel-item border-${displayTier}`;
        const img = document.createElement('img'); img.src = displayItem.image; slot.appendChild(img); scroller.appendChild(slot);
    }
    
    const itemTotalWidth = 116; const containerWidth = document.querySelector('.case-container').offsetWidth;
    const centerOffset = containerWidth / 2; const randomInnerVariance = Math.floor(Math.random() * 40) + 35;
    const targetDistance = (winningIndex * itemTotalWidth) - centerOffset + randomInnerVariance;
    
    scroller.style.transition = "transform 4.5s cubic-bezier(0.1, 0.6, 0.15, 1)";
    scroller.style.transform = `translateX(-${targetDistance}px)`;
    
    setTimeout(() => {
        checkActiveTierStatus(); placeholderText.classList.add('hidden'); lootDisplayContainer.classList.remove('hidden');
        lootDisplayContainer.className = "loot-display tier-" + tier; itemRatingBadge.className = "rating-badge badge-" + tier;
        itemRatingBadge.textContent = tier + " Quality"; itemName.textContent = winnerItem.name;
        itemImage.src = winnerItem.image; itemAbility.textContent = winnerItem.ability;

        // 🌟 IF THE WINNER IS UNIQUE: Flag it and save it to the cloud instantly
        if (winnerItem.isUnique) {
            const itemGlobalKey = `${category}_${subCategory}_${tier}_${winnerItem.name.replace(/\s+/g, '_')}`;
            serverUniqueWipedItems[itemGlobalKey] = true;
            pushUniqueWipeStateToCloud();
        }
    }, 4500);
}

// Add these companion background helpers right below the spinLootBox function:
function pushUniqueWipeStateToCloud() {
    const UNIQUE_API_URL = "https://firebaseio.com";
    if (UNIQUE_API_URL.includes("your-project-id")) return;
    fetch(UNIQUE_API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverUniqueWipedItems)
    }).catch(err => console.log("Cloud save failure for unique list:", err));
}

function syncUniqueWipeStateFromCloud() {
    const UNIQUE_API_URL = "https://firebaseio.com";
    if (UNIQUE_API_URL.includes("your-project-id")) return;
    fetch(UNIQUE_API_URL)
        .then(res => res.json())
        .then(data => {
            if (data) serverUniqueWipedItems = data;
        }).catch(err => console.log("Unique list read error:", err));
}



// ==========================================
// 🛡️ SECURITY MODULE AND DRAGGABLE ENGINES
// ==========================================
adminTriggerBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    loginStatusMsg.className = "status-msg";
    loginStatusMsg.textContent = "";
    adminIdInput.value = "";
    adminPassInput.value = "";
});

loginCancelBtn.addEventListener('click', () => loginModal.classList.add('hidden'));

loginSubmitBtn.addEventListener('click', () => {
    const enteredID = adminIdInput.value.trim();
    const enteredPass = adminPassInput.value.trim();
    
    if (enteredID === MASTER_ID && enteredPass === MASTER_PASSWORD) {
        loginStatusMsg.className = "status-msg status-success";
        loginStatusMsg.textContent = "Successful, logging in...";
        
        setTimeout(() => {
            loginModal.classList.add('hidden');
            adminPanel.classList.remove('hidden');
            adminPanel.style.top = "100px";
            adminPanel.style.right = "50px";
            adminPanel.style.left = "auto";
        }, 1200);
    } else {
        loginStatusMsg.className = "status-msg status-error";
        loginStatusMsg.textContent = "Invalid Credentials. Access Denied.";
    }
});

closePanelBtn.addEventListener('click', () => adminPanel.classList.add('hidden'));

// Bind Tiers Toggle Actions
tierList.forEach(t => {
    document.getElementById(`sw-${t}`).addEventListener('change', (e) => {
        serverStates[t] = e.target.checked;
        pushLockoutStateToCloud();
        checkActiveTierStatus();
    });
});

// Bind Categories Toggle Actions
categoriesList.forEach(c => {
    document.getElementById(`sw-cat-${c}`).addEventListener('change', (e) => {
        serverStates[`cat_${c}`] = e.target.checked;
        pushLockoutStateToCloud();
        updateCategoryDropdownOptions();
    });
});

let isDragging = false;
let currentX, currentY, initialX, initialY;
let xOffset = 0, yOffset = 0;

adminPanelHeader.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === adminPanelHeader) isDragging = true;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        adminPanel.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

categorySelect.addEventListener('change', updateSubCategories);
tierSelect.addEventListener('change', checkActiveTierStatus);
spinBtn.addEventListener('click', spinLootBox);
