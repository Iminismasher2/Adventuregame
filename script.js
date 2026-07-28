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
    },
    looter: { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
};

// All available tiers used to generate fill filler items in the spin wheel
const tierList = ["Bronze", "Silver", "Gold", "Platinum", "Legendary", "Celestial"];

// ==========================================
// ⚙️ CS:GO CAROUSEL ENGINE LOGIC
// ==========================================
const categorySelect = document.getElementById('category-select');
const subCategorySelect = document.getElementById('sub-category-select');
const subCategoryLabel = document.getElementById('sub-category-label');
const tierSelect = document.getElementById('tier-select');
const spinBtn = document.getElementById('spin-btn');
const scroller = document.getElementById('case-scroller');

const placeholderText = document.getElementById('placeholder-text');
const lootDisplayContainer = document.getElementById('loot-display-container');
const itemRatingBadge = document.getElementById('item-rating-badge');
const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');
const itemAbility = document.getElementById('item-ability');

const labelMapping = {
    patron: "🌍 Select Race Homeworld:",
    race: "🧬 Select Your Race:",
    class: "⚔️ Select Your Class:",
    motivation: "🔥 Select Motivation:"
    looter: "-"
};

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
}

function spinLootBox() {
    const tier = tierSelect.value;
    const category = categorySelect.value;
    const subCategory = subCategorySelect.value;
    
    if (!lootTables[category]?.[subCategory]?.[tier]) {
        alert("Loot structure missing setup!");
        return;
    }
    
    const winningPool = lootTables[category][subCategory][tier];
    if (winningPool.length === 0) {
        alert(`No items programmed inside the [${tier}] table for [${subCategory}]. Add items inside script.js!`);
        return;
    }
    
    // Choose the actual winner right now
    const winnerItem = winningPool[Math.floor(Math.random() * winningPool.length)];
    
    // Disable inputs during animation run
    spinBtn.disabled = true;
    lootDisplayContainer.classList.add('hidden');
    placeholderText.classList.remove('hidden');
    placeholderText.textContent = "Unboxing crate...";

    // Build item strip arrays (30 items total, item 26 will be the winner)
    scroller.innerHTML = "";
    scroller.style.transition = "none";
    scroller.style.transform = "translateX(0px)";
    
    const totalItemsCount = 30;
    const winningIndex = 25; // 0-indexed item slot
    
    // Force a micro layout redraw so the browser registers resetting to 0px position
    scroller.offsetHeight;

    for (let i = 0; i < totalItemsCount; i++) {
        let displayItem;
        let displayTier;
        
        if (i === winningIndex) {
            displayItem = winnerItem;
            displayTier = tier;
        } else {
            // Pick a completely random filler item tier and pull from a pool
            displayTier = tierList[Math.floor(Math.random() * tierList.length)];
            const fillerPool = getFillerItemPool(category, subCategory, displayTier) || winningPool;
            displayItem = fillerPool[Math.floor(Math.random() * fillerPool.length)];
        }
        
        // Create slot box card elements
        const slot = document.createElement('div');
        slot.className = `carousel-item border-${displayTier}`;
        
        const img = document.createElement('img');
        img.src = displayItem.image;
        slot.appendChild(img);
        
        scroller.appendChild(slot);
    }
    
    // Math to center the 26th item perfectly inside the viewfinder container line viewport
    const slotWidth = 110; 
    const slotMargin = 6;
    const itemTotalWidth = slotWidth + slotMargin;
    
    const containerWidth = document.querySelector('.case-container').offsetWidth;
    const centerOffset = containerWidth / 2;
    
    // Pick a slight random variance pixel point offset inside the item card so it doesn't land exactly center every time
    const randomInnerVariance = Math.floor(Math.random() * 40) + 35; 
    const targetDistance = (winningIndex * itemTotalWidth) - centerOffset + randomInnerVariance;
    
    // Start CS:GO Slowdown CSS Animation Curve
    scroller.style.transition = "transform 4.5s cubic-bezier(0.1, 0.6, 0.15, 1)";
    scroller.style.transform = `translateX(-${targetDistance}px)`;
    
    // Reveal final text statistics card after 4.5s animation completes
    setTimeout(() => {
        spinBtn.disabled = false;
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

// Safely look up any available items to fill the track background
function getFillerItemPool(cat, sub, tier) {
    for (let c in lootTables) {
        for (let s in lootTables[c]) {
            if (lootTables[cat]?.[sub]?.[tier]?.length > 0) {
                return lootTables[cat][sub][tier];
            }
            if (lootTables[c][s][tier]?.length > 0) {
                return lootTables[c][s][tier];
            }
        }
    }
    return null;
}

categorySelect.addEventListener('change', updateSubCategories);
spinBtn.addEventListener('click', spinLootBox);
updateSubCategories();
