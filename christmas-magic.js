/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                     CHRISTMAS MAGIC - VERSION 2.2.0                       ║
 * ║               Ultra-Lightweight & Performance Optimized                   ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Developed by: Anikesh Kumar Mishra                                       ║
 * ║  Company: CODE4UTECH CONSULTANCY PVT. LTD.                                ║
 * ║  Website: https://code4utech.com                                          ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Features:                                                                ║
 * ║  - CSS-only animations (GPU accelerated, no JavaScript animation loop)    ║
 * ║  - Realistic 3D parallax snow with multiple layers                        ║
 * ║  - Beautiful Santa Claus sleigh animation                                 ║
 * ║  - Zero website performance impact                                        ║
 * ║  - Works on any website via CDN                                           ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Usage: <script src="https://yourdomain/christmas-magic.js"></script>     ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

; (function ChristmasMagicInit() {
    // Prevent double initialization
    if (window.ChristmasMagic && window.ChristmasMagic.initialized) {
        console.log("%c❄️ Christmas Magic v2.2.0 already active!", "color: #00d4ff; font-weight: bold;")
        return
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════════════════════
    const CONFIG = {
        // Snow Settings - LIGHTWEIGHT
        snowflakeCount: window.innerWidth < 768 ? 35 : 60,
        enableSnow: true,

        // Santa Settings
        santaInterval: 30000,
        enableSanta: true,
        santaSpeed: 35000,

        // Visual Settings
        enableGlow: true,
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INJECT STYLES - Pure CSS Animations (GPU Accelerated)
    // ═══════════════════════════════════════════════════════════════════════════
    function injectStyles() {
        if (document.getElementById("christmas-magic-styles")) return

        const styles = document.createElement("style")
        styles.id = "christmas-magic-styles"
        styles.textContent = `
      /* Christmas Magic Container */
      .cm-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2147483646;
        overflow: hidden;
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SNOWFLAKE STYLES - CSS Only Animation
      ═══════════════════════════════════════════════════════════════════════ */
      .cm-snowflake {
        position: absolute;
        top: -50px;
        color: #fff;
        user-select: none;
        pointer-events: none;
        will-change: transform;
        animation: cm-fall linear infinite;
        text-shadow: 0 0 3px rgba(255,255,255,0.8);
      }

      /* Depth Layers */
      .cm-depth-1 {
        font-size: 24px;
        opacity: 1;
        filter: blur(0px);
        z-index: 5;
      }
      .cm-depth-2 {
        font-size: 18px;
        opacity: 0.85;
        filter: blur(0.5px);
        z-index: 4;
      }
      .cm-depth-3 {
        font-size: 14px;
        opacity: 0.7;
        filter: blur(1px);
        z-index: 3;
      }
      .cm-depth-4 {
        font-size: 10px;
        opacity: 0.5;
        filter: blur(1.5px);
        z-index: 2;
      }

      /* Main Fall Animation */
      @keyframes cm-fall {
        0% {
          transform: translateY(-50px) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(25vh) translateX(15px) rotate(90deg);
        }
        50% {
          transform: translateY(50vh) translateX(-10px) rotate(180deg);
        }
        75% {
          transform: translateY(75vh) translateX(20px) rotate(270deg);
        }
        100% {
          transform: translateY(105vh) translateX(-5px) rotate(360deg);
        }
      }

      /* Alternate sway patterns */
      .cm-sway-1 { animation-name: cm-fall-sway1; }
      .cm-sway-2 { animation-name: cm-fall-sway2; }
      .cm-sway-3 { animation-name: cm-fall-sway3; }

      @keyframes cm-fall-sway1 {
        0% { transform: translateY(-50px) translateX(0) rotate(0deg); }
        25% { transform: translateY(25vh) translateX(-20px) rotate(90deg); }
        50% { transform: translateY(50vh) translateX(15px) rotate(180deg); }
        75% { transform: translateY(75vh) translateX(-25px) rotate(270deg); }
        100% { transform: translateY(105vh) translateX(10px) rotate(360deg); }
      }

      @keyframes cm-fall-sway2 {
        0% { transform: translateY(-50px) translateX(0) rotate(0deg); }
        33% { transform: translateY(33vh) translateX(25px) rotate(120deg); }
        66% { transform: translateY(66vh) translateX(-20px) rotate(240deg); }
        100% { transform: translateY(105vh) translateX(15px) rotate(360deg); }
      }

      @keyframes cm-fall-sway3 {
        0% { transform: translateY(-50px) translateX(0) rotate(0deg); }
        20% { transform: translateY(20vh) translateX(-15px) rotate(72deg); }
        40% { transform: translateY(40vh) translateX(20px) rotate(144deg); }
        60% { transform: translateY(60vh) translateX(-25px) rotate(216deg); }
        80% { transform: translateY(80vh) translateX(15px) rotate(288deg); }
        100% { transform: translateY(105vh) translateX(-10px) rotate(360deg); }
      }

      /* ═══════════════════════════════════════════════════════════════════════
         AMBIENT GLOW
      ═══════════════════════════════════════════════════════════════════════ */
      .cm-ambient-glow {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2147483644;
        background: 
          radial-gradient(ellipse at 20% 0%, rgba(100, 200, 255, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 0%, rgba(150, 100, 255, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 30%);
        animation: cm-glow-shift 15s ease-in-out infinite alternate;
      }

      @keyframes cm-glow-shift {
        0% { opacity: 0.6; }
        100% { opacity: 1; }
      }

      /* ═══════════════════════════════════════════════════════════════════════
         SANTA CLAUS SLEIGH - Complete CSS Animation
         Completely redesigned Santa: reindeer now have running legs,
         Santa sits properly in sleigh, flight is much slower (35s)
      ═══════════════════════════════════════════════════════════════════════ */
      .cm-santa-wrapper {
        position: fixed;
        z-index: 2147483647;
        pointer-events: none;
        /* 35s slow flight from bottom-right to top-left */
        animation: cm-santa-fly 35s linear forwards;
      }

      @keyframes cm-santa-fly {
        0% { 
          bottom: 5%;
          right: -350px;
          transform: rotate(8deg);
        }
        100% { 
          bottom: 90%;
          right: calc(100% + 350px);
          transform: rotate(8deg);
        }
      }

      .cm-santa-group {
        display: flex;
        align-items: flex-end;
        animation: cm-bob 3s ease-in-out infinite;
      }

      @keyframes cm-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }

      /* Reindeer with running legs animation */
      .cm-reindeer-container {
        position: relative;
        width: 70px;
        height: 50px;
        margin-right: -10px;
      }

      .cm-reindeer-body {
        position: absolute;
        font-size: 36px;
        top: 0;
        left: 0;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      }

      /* Running legs using CSS */
      .cm-reindeer-legs {
        position: absolute;
        bottom: 2px;
        left: 15px;
        display: flex;
        gap: 8px;
      }

      .cm-leg {
        width: 3px;
        height: 16px;
        background: #8B4513;
        border-radius: 2px;
        transform-origin: top center;
      }

      .cm-leg-front-1 { animation: cm-leg-run-front 0.3s ease-in-out infinite; }
      .cm-leg-front-2 { animation: cm-leg-run-front 0.3s ease-in-out infinite 0.15s; }
      .cm-leg-back-1 { animation: cm-leg-run-back 0.3s ease-in-out infinite; }
      .cm-leg-back-2 { animation: cm-leg-run-back 0.3s ease-in-out infinite 0.15s; }

      @keyframes cm-leg-run-front {
        0%, 100% { transform: rotate(-30deg); }
        50% { transform: rotate(30deg); }
      }

      @keyframes cm-leg-run-back {
        0%, 100% { transform: rotate(30deg); }
        50% { transform: rotate(-30deg); }
      }

      /* Rudolph's Red Nose */
      .cm-reindeer-lead .cm-nose {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #ff2222;
        border-radius: 50%;
        top: 8px;
        left: 50px;
        box-shadow: 0 0 12px 5px rgba(255, 50, 50, 0.9),
                    0 0 25px 10px rgba(255, 50, 50, 0.5);
        animation: cm-nose-glow 1s ease-in-out infinite;
      }

      @keyframes cm-nose-glow {
        0%, 100% { 
          box-shadow: 0 0 12px 5px rgba(255, 50, 50, 0.9), 
                      0 0 25px 10px rgba(255, 50, 50, 0.5); 
        }
        50% { 
          box-shadow: 0 0 18px 8px rgba(255, 50, 50, 1), 
                      0 0 35px 15px rgba(255, 50, 50, 0.7); 
        }
      }

      /* Sleigh with Santa sitting inside properly */
      .cm-sleigh-container {
        position: relative;
        margin-left: 5px;
      }

      .cm-sleigh {
        font-size: 50px;
        filter: drop-shadow(0 3px 8px rgba(0,0,0,0.4));
        animation: cm-sleigh-rock 2.5s ease-in-out infinite;
      }

      @keyframes cm-sleigh-rock {
        0%, 100% { transform: rotate(-1deg); }
        50% { transform: rotate(1deg); }
      }

      /* Santa positioned sitting IN the sleigh */
      .cm-santa {
        position: absolute;
        font-size: 32px;
        top: -20px;
        left: 8px;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      }

      /* Gift bag behind Santa */
      .cm-gift-bag {
        position: absolute;
        font-size: 22px;
        top: -15px;
        left: 35px;
      }

      /* Magic Trail */
      .cm-magic-trail {
        position: absolute;
        right: -80px;
        top: 50%;
        display: flex;
        gap: 10px;
        transform: translateY(-50%);
      }

      .cm-trail-star {
        color: #ffd700;
        font-size: 14px;
        opacity: 0;
        animation: cm-trail-sparkle 1s ease-out infinite;
        text-shadow: 0 0 10px rgba(255, 215, 0, 1);
      }

      .cm-trail-star:nth-child(1) { animation-delay: 0s; }
      .cm-trail-star:nth-child(2) { animation-delay: 0.15s; font-size: 10px; }
      .cm-trail-star:nth-child(3) { animation-delay: 0.3s; font-size: 12px; }
      .cm-trail-star:nth-child(4) { animation-delay: 0.45s; font-size: 8px; }
      .cm-trail-star:nth-child(5) { animation-delay: 0.6s; font-size: 11px; }
      .cm-trail-star:nth-child(6) { animation-delay: 0.75s; font-size: 9px; }

      @keyframes cm-trail-sparkle {
        0% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(0.5) translateX(30px); }
      }

      /* Falling Gifts */
      .cm-gift {
        position: fixed;
        font-size: 24px;
        z-index: 2147483646;
        pointer-events: none;
        animation: cm-gift-fall 5s ease-in forwards;
      }

      @keyframes cm-gift-fall {
        0% { 
          opacity: 1; 
          transform: translateY(0) rotate(0deg) scale(1); 
        }
        80% { 
          opacity: 1; 
        }
        100% { 
          opacity: 0; 
          transform: translateY(80vh) rotate(540deg) scale(0.3); 
        }
      }

      /* ═══════════════════════════════════════════════════════════════════════
         ACCESSIBILITY & PERFORMANCE
      ═══════════════════════════════════════════════════════════════════════ */
      @media (prefers-reduced-motion: reduce) {
        .cm-snowflake,
        .cm-santa-wrapper,
        .cm-ambient-glow {
          animation: none !important;
        }
        .cm-snowflake { display: none; }
      }

      @media print {
        .cm-container,
        .cm-ambient-glow,
        .cm-santa-wrapper {
          display: none !important;
        }
      }
    `

        document.head.appendChild(styles)
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CREATE SNOW CONTAINER & SNOWFLAKES
    // ═══════════════════════════════════════════════════════════════════════════
    let snowContainer = null

    function createSnowContainer() {
        if (snowContainer) return snowContainer

        snowContainer = document.createElement("div")
        snowContainer.className = "cm-container"
        snowContainer.id = "cm-snow-container"
        document.body.appendChild(snowContainer)
        return snowContainer
    }

    function createSnowflakes() {
        const container = createSnowContainer()
        const flakes = ["❄", "❅", "❆", "✻", "✼", "❉", "✱", "∗"]
        const swayClasses = ["", "cm-sway-1", "cm-sway-2", "cm-sway-3"]
        const depthClasses = ["cm-depth-1", "cm-depth-2", "cm-depth-3", "cm-depth-4"]

        for (let i = 0; i < CONFIG.snowflakeCount; i++) {
            const snowflake = document.createElement("div")
            snowflake.className = "cm-snowflake"

            // Random properties
            const depth = depthClasses[Math.floor(Math.random() * depthClasses.length)]
            const sway = swayClasses[Math.floor(Math.random() * swayClasses.length)]

            snowflake.classList.add(depth)
            if (sway) snowflake.classList.add(sway)

            snowflake.textContent = flakes[Math.floor(Math.random() * flakes.length)]
            snowflake.style.left = Math.random() * 100 + "%"

            // Varied animation duration for natural feel (slow, gentle snow)
            const duration = 15 + Math.random() * 20 // 15-35 seconds
            snowflake.style.animationDuration = duration + "s"

            // Staggered start
            snowflake.style.animationDelay = Math.random() * 15 + "s"

            container.appendChild(snowflake)
        }
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // CREATE AMBIENT ELEMENTS
    // ═══════════════════════════════════════════════════════════════════════════
    function createAmbientGlow() {
        if (!CONFIG.enableGlow) return
        if (document.getElementById("cm-ambient-glow")) return

        const glow = document.createElement("div")
        glow.className = "cm-ambient-glow"
        glow.id = "cm-ambient-glow"
        document.body.appendChild(glow)
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // SANTA CLAUS ANIMATION
    // ═══════════════════════════════════════════════════════════════════════════
    let santaTimeout = null

    function spawnSanta() {
        if (!CONFIG.enableSanta) return

        // Remove existing santa
        const existing = document.getElementById("cm-santa-wrapper")
        if (existing) existing.remove()

        const wrapper = document.createElement("div")
        wrapper.className = "cm-santa-wrapper"
        wrapper.id = "cm-santa-wrapper"

        wrapper.innerHTML = `
      <div class="cm-santa-group">
        <!-- Lead Reindeer (Rudolph) with running legs -->
        <div class="cm-reindeer-container cm-reindeer-lead">
          <div class="cm-reindeer-body">🦌</div>
          <div class="cm-nose"></div>
          <div class="cm-reindeer-legs">
            <div class="cm-leg cm-leg-front-1"></div>
            <div class="cm-leg cm-leg-front-2"></div>
            <div class="cm-leg cm-leg-back-1"></div>
            <div class="cm-leg cm-leg-back-2"></div>
          </div>
        </div>
        
        <!-- Second Reindeer with running legs -->
        <div class="cm-reindeer-container">
          <div class="cm-reindeer-body">🦌</div>
          <div class="cm-reindeer-legs">
            <div class="cm-leg cm-leg-front-1"></div>
            <div class="cm-leg cm-leg-front-2"></div>
            <div class="cm-leg cm-leg-back-1"></div>
            <div class="cm-leg cm-leg-back-2"></div>
          </div>
        </div>
        
        <!-- Sleigh with Santa sitting inside -->
        <div class="cm-sleigh-container">
          <div class="cm-sleigh">🛷</div>
          <div class="cm-santa">🎅</div>
          <div class="cm-gift-bag">🎁</div>
        </div>
        
        <!-- Magic sparkle trail behind sleigh -->
        <div class="cm-magic-trail">
          <span class="cm-trail-star">✦</span>
          <span class="cm-trail-star">✧</span>
          <span class="cm-trail-star">⭐</span>
          <span class="cm-trail-star">✦</span>
          <span class="cm-trail-star">✧</span>
          <span class="cm-trail-star">⭐</span>
        </div>
      </div>
    `

        document.body.appendChild(wrapper)

        // Drop gifts during flight
        const gifts = ["🎁", "⭐", "🎄", "🎀", "✨", "🧦"]
        let giftCount = 0
        const maxGifts = 4

        const giftInterval = setInterval(() => {
            if (giftCount >= maxGifts) {
                clearInterval(giftInterval)
                return
            }

            const rect = wrapper.getBoundingClientRect()
            if (rect.left > 50 && rect.right < window.innerWidth - 50) {
                const gift = document.createElement("div")
                gift.className = "cm-gift"
                gift.textContent = gifts[Math.floor(Math.random() * gifts.length)]
                gift.style.left = rect.left + 120 + Math.random() * 30 + "px"
                gift.style.top = rect.top + 40 + "px"
                document.body.appendChild(gift)

                setTimeout(() => gift.remove(), 5000)
                giftCount++
            }
        }, 5000)

        // Remove after animation completes
        setTimeout(() => {
            wrapper.remove()
            clearInterval(giftInterval)
        }, CONFIG.santaSpeed + 500)

        // Schedule next appearance
        santaTimeout = setTimeout(spawnSanta, CONFIG.santaInterval)
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // INITIALIZATION & PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════
    function init() {
        injectStyles()

        if (CONFIG.enableSnow) {
            createSnowflakes()
        }

        createAmbientGlow()

        // First Santa after 3 seconds
        setTimeout(spawnSanta, 3000)

        console.log(
            "%c❄️ Christmas Magic v2.2.0 Loaded! %c\n" +
            "Developed by Anikesh Kumar Mishra\n" +
            "CODE4UTECH CONSULTANCY PVT. LTD.\n" +
            "https://code4utech.com",
            "color: #00d4ff; font-weight: bold; font-size: 14px;",
            "color: #888; font-size: 11px;",
        )
    }

    function destroy() {
        // Clear timeouts
        if (santaTimeout) clearTimeout(santaTimeout)

        // Remove elements
        const elements = ["cm-snow-container", "cm-ambient-glow", "cm-santa-wrapper", "christmas-magic-styles"]

        elements.forEach((id) => {
            const el = document.getElementById(id)
            if (el) el.remove()
        })

        // Remove all gifts
        document.querySelectorAll(".cm-gift").forEach((g) => g.remove())

        snowContainer = null
    }

    // Public API
    window.ChristmasMagic = {
        initialized: true,
        version: "2.2.0",

        toggleSnow(enabled) {
            CONFIG.enableSnow = enabled
            const container = document.getElementById("cm-snow-container")
            if (container) {
                container.style.display = enabled ? "block" : "none"
            }
        },

        toggleSanta(enabled) {
            CONFIG.enableSanta = enabled
            if (!enabled && santaTimeout) {
                clearTimeout(santaTimeout)
                const santa = document.getElementById("cm-santa-wrapper")
                if (santa) santa.remove()
            }
        },

        spawnSanta() {
            spawnSanta()
        },

        destroy() {
            destroy()
        },

        getConfig() {
            return { ...CONFIG }
        },
    }

    // Start when DOM is ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init)
    } else {
        init()
    }
})()
