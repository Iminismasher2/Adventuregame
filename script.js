// ==========================================
// 🔐 SECURITY PROFILE CONFIGURATION
// ==========================================
const SECRET_ID = "Syndicate99";       // Change this to whatever ID value you want
const SECRET_PASSWORD = "Password123"; // Change this to your master token pass key

// ==========================================
// 📡 DATABASE CONFIGURATION LINK
// ==========================================
// Replace this with the string URL provided by your free Firebase console setup step.
// Make sure it keeps the tailing slash and includes the "lockouts.json" endpoint route extension!
const DATABASE_API_URL = "https://firebaseio.com";

// ==========================================
// 🛠️ DYNAMIC SUB-CATEGORY OPTIONS CONFIGURATION
// ==========================================
const subCategories = {
    patron: ["Terra Nova", "Zul'Kari Prime"],
    race: ["Human", "Elf"],
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
            Silver: [{ name: "Nova Laser Pointer", image: "https://placehold.co", ability: "Blinds organic targets temporarily up to 50 yards away." }],
            Gold: [{ name: "Energy Core", image: "https://placehold.co", ability: "Can power a small rover or machine." }],
            Platinum: [{ name: "Nano Medkit", image: "https://placehold.co", ability: "Instantly knits light flesh wounds closed." }],
            Legendary: [{ name: "Vibroblade", image: "https://placehold.co", ability: "High frequency blade that cleanly slices titanium." }],
            Celestial: [{ name: "Chronos Matrix", image: "https://placehold.co", ability: "Rewinds local reality time space by exactly 3 seconds." }]
        },
        "Zul'Kari Prime": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    race: {
        "Human": { Bronze: [{ name: "Multi-tool", image: "https://placehold.co", ability: "Standard maintenance tools." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Elf": { Bronze: [{ name: "Twig Charm", image: "https://placehold.co", ability: "Minor tracking buffs in deep woodlands." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    class: {
        "Fighter": { Bronze: [{ name: "Whetstone Kit", image: "https://placehold.co", ability: "Maintains weapons cleanly." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Mage": { Bronze: [{ name: "Ink & Quill", image: "https://placehold.co", ability: "Logging system notes." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    motivation: {
        "Revenge": { Bronze: [{ name: "Target Dossier", image: "https://placehold.co", ability: "Sketches on loose targets." }], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Glory": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    }
};

const tierList = ["Bronze", "Silver", "Gold", "Platinum", "Legendary", "Celestial"];

// Dynamic system lock states tracked via data engines
let serverTierLockouts = { Bronze: true, Silver: true, Gold: true, Platinum: true, Legendary: true, Celestial: true };

// DOM Selector Elements
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

// Admin Panel Access Variables
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

const labelMapping = { patron: "🌍 Select Race Homeworld:", race: "🧬 Select Your Race:", class: "⚔️ Select Your Class:", motivation: "🔥 Select Motivation:" };

function updateSubCategories() {
    const selectedCategory = categorySelect.value;
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

// Check database lock array states to determine switch options accessibility rules dynamically
function checkActiveTierStatus() {
    const selectedTier = tierSelect.value;
    const isAllowed = serverTierLockouts[selectedTier];
    
    if (isAllowed === false) {
        spinBtn.disabled = true;
        lockoutNotice.classList.remove('hidden');
    } else {
        spinBtn.disabled = false;
        lockoutNotice.classList.add('hidden');
    }
}

// Fetch states live from cloud database service endpoints
function syncFromCloudDatabase() {
    if (DATABASE_API_URL.includes("your-project-id")) return; // Fallback structure safety skip
    
    fetch(DATABASE_API_URL)
        .then(res => res.json())
        .then(data => {
            if (data) {
                serverTierLockouts = data;
                // Sync physical interface checkbox states to current cloud states
                tierList.forEach(t => {
                    const cb = document.getElementById(`sw-${t}`);
                    if (cb) cb.checked = (data[t] !== false);
                });
                checkActiveTierStatus();
            }
        }).catch(err => console.log("Cloud read missing:", err));
}

// Push admin toggle changes to cloud storage vectors
function pushLockoutStateToCloud() {
    if (DATABASE_API_URL.includes("your-project-id")) return;
    
    fetch(DATABASE_API_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serverTierLockouts)
    }).catch(err => console.log("Cloud save failure:", err));
}

// ==========================================
// 🕹️ CS:GO CAROUSEL ENGINE LOGIC
// ==========================================
function spinLootBox() {
    const tier = tierSelect.value;
    const category = categorySelect.value;
    const subCategory = subCategorySelect.value;
    
    if (serverTierLockouts[tier] === false) return; // Prevent edge case illegal execution exploits
    
    const winningPool = lootTables[category]?.[subCategory]?.[tier];
    if (!winningPool || winningPool.length === 0) {
        alert(`No items programmed inside the [${tier}] table for [${subCategory}].`);
        return;
    }
    
    const winnerItem = winningPool[Math.floor(Math.random() * winningPool.length)];
    
    spinBtn.disabled = true;
    lootDisplayContainer.classList.add('hidden');
    placeholderText.classList.remove('hidden');
    placeholderText.textContent = "Unboxing crate...";

    scroller.innerHTML = "";
    scroller.style.transition = "none";
    scroller.style.transform = "translateX(0px)";
    
    const totalItemsCount = 30;
    const winningIndex = 25;
    scroller.offsetHeight; // Layout recalculation redraw engine anchor

    for (let i = 0; i < totalItemsCount; i++) {
        let displayItem, displayTier;
        if (i === winningIndex) {
            displayItem = winnerItem; displayTier = tier;
        } else {
            displayTier = tierList[Math.floor(Math.random() * tierList.length)];
            const fillerPool = getFillerItemPool(category, subCategory, displayTier) || winningPool;
            displayItem = fillerPool[Math.floor(Math.random() * fillerPool.length)];
        }
        
        const slot = document.createElement('div');
        slot.className = `carousel-item border-${displayTier}`;
        const img = document.createElement('img');
        img.src = displayItem.image;
        slot.appendChild(img);
        scroller.appendChild(slot);
    }
    
    const itemTotalWidth = 116; 
    const containerWidth = document.querySelector('.case-container').offsetWidth;
    const centerOffset = containerWidth / 2;
const randomInnerVariance = Math.floor(Math.random() * 40) + 35;
const targetDistance = (winningIndex * itemTotalWidth) - centerOffset + randomInnerVariance;
scroller.style.transition = "transform 4.5s cubic-bezier(0.1, 0.6, 0.15, 1)";
scroller.style.transform = translateX(-${targetDistance}px);
setTimeout(() => {
checkActiveTierStatus(); // Re-evaluate validation boundaries
placeholderText.classList.add('hidden');
lootDisplayContainer.classList.remove('hidden');
lootDisplayContainer.className = "loot-display tier-" + tier;
itemRatingBadge.className = "rating-badge badge-" + tier;
itemRatingBadge.textContent = tier + " Quality";
itemName.textContent = winnerItem.name;
itemImage.src = winnerItem.image;
itemAbility.textContent = winnerItem.ability;
}, 4500);
}
function getFillerItemPool(cat, sub, tier) {
for (let c in lootTables) {
for (let s in lootTables[c]) {
if (lootTables[cat]?.[sub]?.[tier]?.length > 0) return lootTables[cat][sub][tier];
if (lootTables[c][s][tier]?.length > 0) return lootTables[c][s][tier];
}
}
return null;
}
// ==========================================
// 🛡️ SECURITY MODULE AND DRAGGABLE ACTIONS INTERFACES
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
const enteredID = adminIdInput.value;
const enteredPass = adminPassInput.value;
if (enteredID === SECRET_ID && enteredPass === SECRET_PASSWORD) {
loginStatusMsg.className = "status-msg status-success";
loginStatusMsg.textContent = "Successful, logging in...";
setTimeout(() => {
loginModal.classList.add('hidden');
adminPanel.classList.remove('hidden');
// Force dynamic positioning back near top right default positions upon fresh logins
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
// Attaching checkbox switch state click mutation triggers
tierList.forEach(t => {
document.getElementById(sw-${t}).addEventListener('change', (e) => {
serverTierLockouts[t] = e.target.checked;
pushLockoutStateToCloud();
checkActiveTierStatus();
});
});
// Draggable Panel API Logic Engine Script Integration
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
adminPanel.style.transform = translate(${currentX}px, ${currentY}px);
}
}
function dragEnd() {
initialX = currentX;
initialY = currentY;
isDragging = false;
}
// Event hooks setup
categorySelect.addEventListener('change', updateSubCategories);
tierSelect.addEventListener('change', checkActiveTierStatus);
spinBtn.addEventListener('click', spinLootBox);
// Initialize system defaults and start persistent real-time background sync polling tasks
updateSubCategories();
setInterval(syncFromCloudDatabase, 3000); // Poll database updates automatically every 3 seconds

