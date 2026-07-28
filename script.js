:root {
    --bg-dark: #0f111a;
    --card-bg: #1a1d2e;
    --text-main: #f0f4f8;
    --accent: #8b5cf6;
    
    /* Tier Colors */
    --color-Bronze: #cd7f32;
    --color-Silver: #c0c0c0;
    --color-Gold: #ffd700;
    --color-Platinum: #e5e4e2;
    --color-Legendary: #ff4500;
    --color-Celestial: #00ffff;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    color: var(--accent);
    margin-bottom: 5px;
}

.grid-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

@media (max-width: 768px) {
    .grid-layout {
        grid-template-columns: 1fr;
    }
}

.controls-card, .display-card {
    background-color: var(--card-bg);
    border: 2px solid #2e344e;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
    color: #a6adbb;
}

select {
    width: 100%;
    padding: 12px;
    background-color: #0f111a;
    color: #fff;
    border: 2px solid #3b4252;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
}

select:focus {
    border-color: var(--accent);
}

.spin-button {
    width: 100%;
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    color: white;
    border: none;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.2s;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.spin-button:disabled {
    background: #3b4252;
    cursor: not-allowed;
    box-shadow: none;
}

/* ==========================================
   🕹️ CS:GO CAROUSEL SYSTEM STYLING
   ========================================== */
.case-container {
    position: relative;
    width: 100%;
    height: 130px;
    background-color: #0b0c13;
    border: 3px solid #2e344e;
    border-radius: 8px;
    overflow: hidden;
    margin: 20px 0;
}

/* The vertical marker line directly in the center */
.case-ticker-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #ff4500;
    z-index: 10;
    box-shadow: 0 0 10px #ff4500;
    transform: translateX(-50%);
}

/* Rolling strip holding all items side-by-side */
.case-scroller {
    display: flex;
    position: absolute;
    left: 0;
    top: 10px;
    height: 110px;
    will-change: transform;
}

/* Individual item box slots inside the carousel */
.carousel-item {
    width: 110px;
    height: 110px;
    margin-right: 6px;
    background-color: #1a1d2e;
    border-bottom: 5px solid #555;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 5px;
}

.carousel-item img {
    width: 70px;
    height: 70px;
    object-fit: contain;
}

/* Dynamic Tier Bottom Borders for Carousel Slots */
.border-Bronze { border-bottom-color: var(--color-Bronze); }
.border-Silver { border-bottom-color: var(--color-Silver); }
.border-Gold { border-bottom-color: var(--color-Gold); }
.border-Platinum { border-bottom-color: var(--color-Platinum); }
.border-Legendary { border-bottom-color: var(--color-Legendary); }
.border-Celestial { border-bottom-color: var(--color-Celestial); }

/* Final Item Reveal Styling */
.display-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 480px;
}

.placeholder-text {
    color: #4c566a;
    font-style: italic;
    margin-top: 20px;
}

.loot-display {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    margin-top: 15px;
}

.hidden {
    display: none !important;
}

.rating-badge {
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 15px;
}

#item-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 10px;
    border: 3px solid #3b4252;
    background-color: #0f111a;
    padding: 10px;
    margin-bottom: 15px;
}

#item-name {
    font-size: 24px;
    margin: 5px 0;
}

#item-ability {
    color: #d8dee9;
    line-height: 1.6;
    max-width: 90%;
    background: #0f111a;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid var(--accent);
}

/* Visual Glow Treatments for Unboxed Tiers */
.tier-Bronze { border-color: var(--color-Bronze); box-shadow: 0 0 15px rgba(205, 127, 50, 0.4); }
.tier-Silver { border-color: var(--color-Silver); box-shadow: 0 0 15px rgba(192, 192, 192, 0.4); }
.tier-Gold { border-color: var(--color-Gold); box-shadow: 0 0 15px rgba(255, 215, 0, 0.4); }
.tier-Platinum { border-color: var(--color-Platinum); box-shadow: 0 0 15px rgba(229, 228, 226, 0.4); }
.tier-Legendary { border-color: var(--color-Legendary); box-shadow: 0 0 15px rgba(255, 69, 0, 0.6); }
.tier-Celestial { border-color: var(--color-Celestial); box-shadow: 0 0 25px rgba(0, 255, 255, 0.7); }

.badge-Bronze { background-color: var(--color-Bronze); color: #fff; }
.badge-Silver { background-color: var(--color-Silver); color: #000; }
.badge-Gold { background-color: var(--color-Gold); color: #000; }
.badge-Platinum { background-color: var(--color-Platinum); color: #000; }
.badge-Legendary { background-color: var(--color-Legendary); color: #fff; }
.badge-Celestial { background-color: var(--color-Celestial); color: #000; }

@keyframes popIn {
    0% { transform: scale(0.7); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
