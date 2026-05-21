// Infinitely Reusable Product Rendering
export function renderProductGrid(containerId, productArray) {
    const gridContainer = document.getElementById(containerId);
    if (!gridContainer || !productArray || productArray.length === 0) return;

    gridContainer.innerHTML = productArray.map(product => {
        // Star calculator logic
        const starHTML = Array.from({ length: 5 }, (_, index) => {
            const isFilled = index < product.rating;
            return `
                <svg class="w-3 h-3 sm:w-4 sm:h-4 ${isFilled ? 'text-amber-400 fill-amber-400' : 'text-amber-200/40 fill-transparent'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        }).join('');

        const badgeHTML = product.badge
            ? `<span class="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 bg-red-berry text-white text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm">${product.badge}</span>`
            : '';

        return `
            <div class="relative flex flex-col justify-between p-3 sm:p-5 bg-white/40 backdrop-blur-sm border border-gray-100/60 rounded-2xl sm:rounded-[2.2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                ${badgeHTML}
                <div class="w-full h-32 sm:h-44 md:h-56 flex items-center justify-center relative mb-2 sm:mb-4 mt-1 sm:mt-2 overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-[90%] sm:max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none">
                </div>
                <div class="flex flex-col grow justify-end">
                    <div class="flex items-center gap-0.5 mb-1.5 sm:mb-2">${starHTML}</div>
                    <h3 class="text-sm sm:text-base font-bold text-red-berry tracking-wide line-clamp-1 mb-1">${product.name}</h3>
                    <div class="flex items-baseline gap-1.5 sm:gap-2 mb-3 sm:mb-4 font-science-gothic">
                        <span class="text-lg sm:text-2xl font-medium text-red-berry">$${product.currentPrice}</span>
                        <span class="text-xs sm:text-sm text-rose-900/40 line-through font-medium">$${product.oldPrice}</span>
                    </div>
                    <button class="w-full bg-red-berry text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 font-bold text-[10px] sm:text-sm uppercase tracking-widest hover:bg-[#a62432] transition-colors cursor-pointer">
                        <img src="./src/assets/grocery-store.png" alt="Cart" class="w-4 h-4 sm:w-5 sm:h-5 invert brightness-0">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}