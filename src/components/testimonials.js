// Testimonial Dynamic Data Store & Switcher Module

const REVIEWS = [
    {
        id: 1,
        quote: "The arrangements from KNGU are pure poetry. I ordered a custom peony suite for Mother's Day, and the presentation alone took my breath away. They didn't just deliver flowers; they delivered a masterpiece.",
        avatar: "",
        name: "Liam Vance",
        role: "Luxury Event Planner"
    },
    {
        id: 2,
        quote: "Absolute perfection down to every stem. The bespoke glassmorphism card concept mirrors their service—modern, transparent, and completely breathtaking. My go-to shop for corporate setups now.",
        avatar: "",
        name: "Sophia Sterling",
        role: "Creative Director"
    },
    {
        id: 3,
        quote: "I am blown away by the freshness guidelines they maintain. Three days later and the blooms look as fresh as the second they arrived. Handcrafted artistry at its finest.",
        avatar: "",
        name: "Marcus Thorne",
        role: "Botanical Collector"
    },
    {
        id: 4,
        quote: "Unmatched customer care and luxurious presentation. The team handled our rush anniversary configuration flawlessly. Highly recommended for premium designs.",
        avatar: "",
        name: "Elena Rostova",
        role: "Editorial Stylist"
    }
];

let currentIndex = 0;

export function initTestimonialSlider() {
    const slideNode = document.getElementById('testimonial-slide-node');
    const dotsContainer = document.getElementById('testimonial-dots-container');

    if (!slideNode || !dotsContainer) return;

    // Core Render Display Router Function
    function displaySlide(index) {
        currentIndex = index;
        const activeReview = REVIEWS[currentIndex];

        // Trigger quick slide fade animation transition
        slideNode.classList.add('opacity-0');

        setTimeout(() => {
            // Generate content profile avatar placeholder circle if image isn't provided
            const avatarImage = activeReview.avatar
                ? `<img src="${activeReview.avatar}" alt="${activeReview.name}" class="w-full h-full object-cover">`
                : `<div class="w-full h-full bg-white/30 border border-white/20 rounded-full flex items-center justify-center font-bold text-lg">${activeReview.name.charAt(0)}</div>`;

            // Inject core typography elements
            slideNode.innerHTML = `
                <p class="text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide text-white/95 italic mb-8">
                    "${activeReview.quote}"
                </p>
                <div class="flex flex-col items-center gap-3">
                    <div class="w-14 h-14 rounded-full overflow-hidden shadow-inner relative">
                        ${avatarImage}
                    </div>
                    <h4 class="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-berry">
                        ${activeReview.name} <span class="font-light text-white/60 mx-1">/</span> <span class="font-normal text-white/80">${activeReview.role}</span>
                    </h4>
                </div>
            `;

            // Remove opacity hiding rule to fade content back into view
            slideNode.classList.remove('opacity-0');

            // Re-render dots to shift active background styling properties
            updateDots();
        }, 250);
    }

    // Generator logic to output matching index navigator dot nodes
    function updateDots() {
        dotsContainer.innerHTML = REVIEWS.map((_, index) => {
            const isActive = index === currentIndex;
            return `
                <button data-index="${index}" class="dot-btn h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? 'w-6 bg-white shadow-sm' : 'w-2 bg-white/40 hover:bg-white/60'}" aria-label="Go to slide ${index + 1}"></button>
            `;
        }).join('');
    }

    // Set up click delegator routing listener across dots container node
    dotsContainer.addEventListener('click', (e) => {
        const clickedDot = e.target.closest('.dot-btn');
        if (!clickedDot) return;

        const targetIndex = parseInt(clickedDot.getAttribute('data-index'), 10);
        if (targetIndex === currentIndex) return;

        displaySlide(targetIndex);
    });

    // Mount initial start data configurations onto layout viewport frames
    displaySlide(0);
}