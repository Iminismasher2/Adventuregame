// Save this file as: script.js

// ==========================================
// 🛠️ DYNAMIC SUB-CATEGORY OPTIONS CONFIGURATION
// ==========================================
// Add, change, or remove names here. The dropdown options will update automatically!
const subCategories = {
    patron: ["Terra Nova", "Zul'Kari Prime", "Chronos Station"],
    race: ["Human", "Elf", "Cyborg", "Orc"],
    class: ["Fighter", "Mage", "Rogue", "Cleric"],
    motivation: ["Revenge", "Glory", "Wealth", "Discovery"]
};

// ==========================================
// 📦 HIGHLY CUSTOMIZABLE LOOT TABLES DATA STRUCTURE
// ==========================================
// Structure: category -> subCategory -> tier -> Array of Items
// Item properties required: name, image, ability
const lootTables = {
    patron: {
        "Terra Nova": {
            Bronze: [
                { name: "Terra Iron Rations", image: "https://placehold.co", ability: "Provides basic non-magical baseline nourishment for 3 days." },
                { name: "Scout Compass", image: "https://placehold.co", ability: "Points strictly north on terrestrial planets." }
            ],
            Silver: [
                { name: "Nova Laser Pointer", image: "https://placehold.co", ability: "Blinds organic eyes temporarily up to 50 yards away." }
            ],
            Gold: [], Platinum: [], Legendary: [], Celestial: [] // Add items similarly
        },
        "Zul'Kari Prime": {
            Bronze: [{ name: "Acid-Weave Scrap", image: "https://placehold.co", ability: "Can be melted down or used as acid-resistant padding." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Chronos Station": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    race: {
        "Human": {
            Bronze: [{ name: "Standard Issue Multi-tool", image: "https://placehold.co", ability: "Acts as screwdrivers, pliers, and a small blade." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Elf": {
            Bronze: [{ name: "Sylvan Twig Charm", image: "https://placehold.co", ability: "Allows minor tracking buffs in deep woodlands." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Cyborg": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Orc": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    class: {
        "Fighter": {
            Bronze: [{ name: "Whetstone & Oil Kit", image: "https://placehold.co", ability: "Maintains mundane slashing weapons to prevent dulling." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Mage": {
            Bronze: [{ name: "Ink Vial & Quill", image: "https://placehold.co", ability: "Standard non-magical tools to log arcana or notes." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Rogue": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Cleric": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    },
    motivation: {
        "Revenge": {
            Bronze: [{ name: "Target Bounty Dossier", image: "https://placehold.co", ability: "Contains sketches and loose info about minor criminal rings." }],
            Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: []
        },
        "Glory": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Wealth": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] },
        "Discovery": { Bronze: [], Silver: [], Gold: [], Platinum: [], Legendary: [], Celestial: [] }
    }
};

// ==========================================
// ⚙️ PROGRAM ENGINE LOGIC (DO NOT CHANGE UNLESS CODESMITHING)
// ==========================================

const categorySelect = document.getElementById('category-select');
const subCategorySelect = document.getElementById('sub-category-select');
const subCategoryLabel = document.getElementById('sub-category-label');
const tierSelect = document.getElementById('tier-select');
const spinBtn = document.getElementById('spin-btn');

const placeholderText = document.getElementById('placeholder-text');
const lootDisplayContainer = document.getElementById('loot-display-container');
const itemRatingBadge = document.getElementById('item-rating-badge');
const itemImage = document.getElementById('item-image');
const itemName = document.getElementById('item-name');
const itemAbility = document.getElementById('item-ability');

// Map dropdown tag names to user-friendly label updates
const labelMapping = {
    patron: "🌍 Select Race Homeworld:",
    race: "🧬 Select Your Race:",
    class: "⚔️ Select Your Class:",
    motivation: "🔥 Select Motivation:"
};

// Update sub-category dropdown menu depending on category tag selected
function updateSubCategories() {
    const selectedCategory = categorySelect.value;
    
    // Update label text contextually
    subCategoryLabel.textContent = labelMapping[selectedCategory];
    
    // Clear old options
    subCategorySelect.innerHTML = "";
    
    // Inject new options configured in data array
    subCategories[selectedCategory].forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option;
        optElement.textContent = option;
        subCategorySelect.appendChild(optElement);
    });
}

// Roll for item
function spinLootBox() {
    const tier = tierSelect.value;
    const category = categorySelect.value;
    const subCategory = subCategorySelect.value;
    
    // Safely check if path and lists exist
    if (!lootTables[category] || !lootTables[category][subCategory] || !lootTables[category][subCategory][tier]) {
        alert("Loot structure missing! Make sure tables are populated in script.js.");
        return;
    }
    
    const targetPool = lootTables[category][subCategory][tier];
    
    if (targetPool.length === 0) {
        alert(`No items programmed inside the [${tier}] table for [${subCategory}]. Fill them inside script.js!`);
        return;
    }
    
    // Get random index item
    const randomIndex = Math.floor(Math.random() * targetPool.length);
    const chosenItem = targetPool[randomIndex];
    
    // Display item properties to UI elements
    renderItem(chosenItem, tier);
}

function renderItem(item, tier) {
    placeholderText.classList.add('hidden');
    lootDisplayContainer.classList.remove('hidden');
    
    // Apply styling layouts dynamically based on tier rating context
    lootDisplayContainer.className = "loot-display tier-" + tier;
    itemRatingBadge.className = "rating-badge badge-" + tier;
    
    // Set field outputs
    itemRatingBadge.textContent = tier + " Quality";
    itemName.textContent = item.name;
    itemImage.src = item.image;
    itemAbility.textContent = item.ability;
}

// Attach Event Listeners
categorySelect.addEventListener('change', updateSubCategories);
spinBtn.addEventListener('click', spinLootBox);

// Initialize setup state on first page load
updateSubCategories();
