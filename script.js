import { renderProductGrid } from './src/components/products.js';
import { initTestimonialSlider } from './src/components/testimonials.js';

// DATA STORES
const NEW_ARRIVALS = [
    { id: 1, name: "Scarlet Romance Bouquet", image: "./src/assets/Scarlet Romance Bouquet.png", currentPrice: "45.00", oldPrice: "58.00", rating: 3, badge: "Soldout" },
    { id: 2, name: "Blushing Cloud Peonies", image: "./src/assets/Blushing Cloud Peonies.png", currentPrice: "68.00", oldPrice: "85.00", rating: 4, badge: null },
    { id: 3, name: "Golden Radiance Sunflowers", image: "./src/assets/Golden Radiance Sunflowers.png", currentPrice: "45.00", oldPrice: "58.00", rating: 3, badge: "Soldout" },
    { id: 4, name: "Majestic Fuchsia Cascade", image: "./src/assets/Majestic Fuchsia Cascade.png", currentPrice: "68.00", oldPrice: "85.00", rating: 4, badge: null },
    { id: 5, name: "Crimson Velvet Roses", image: "./src/assets/Crimson Velvet Roses.png", currentPrice: "55.00", oldPrice: "70.00", rating: 5, badge: "Exclusive" },
    { id: 6, name: "Enchanted Meadow Mix", image: "./src/assets/Enchanted Meadow Mix.png", currentPrice: "48.00", oldPrice: "62.00", rating: 4, badge: null },
    { id: 7, name: "Pastel Dream Orchids", image: "./src/assets/Pastel Dream Orchids.png", currentPrice: "89.00", oldPrice: "105.00", rating: 5, badge: null },
    { id: 8, name: "Saffron Sunrise Tulips", image: "./src/assets/Saffron Sunrise Tulips.png", currentPrice: "39.00", oldPrice: "52.00", rating: 4, badge: "-25%" }
];

const DATA_FEATURED = [
    { id: 9, name: "Valentine Red Rose", image: "./src/assets/Valentine Red Rose.png", currentPrice: "39.00", oldPrice: "52.00", rating: 4, badge: "-25%" },
    { id: 10, name: "Pastel Rose", image: "./src/assets/Pastel Rose.png", currentPrice: "48.00", oldPrice: "62.00", rating: 4, badge: null },
    { id: 11, name: "Golden Yellow", image: "./src/assets/Golden Yellow.png", currentPrice: "48.00", oldPrice: "62.00", rating: 4, badge: null },
    { id: 12, name: "Box of Rose", image: "./src/assets/Box of Rose.png", currentPrice: "48.00", oldPrice: "62.00", rating: 4, badge: null },
    { id: 13, name: "Crimson Velvet Roses", image: "./src/assets/Crimson Velvet Roses.png", currentPrice: "55.00", oldPrice: "70.00", rating: 5, badge: "Exclusive" },
    { id: 14, name: "Enchanted Meadow Mix", image: "./src/assets/Enchanted Meadow Mix.png", currentPrice: "48.00", oldPrice: "62.00", rating: 4, badge: null },
    { id: 15, name: "Pastel Dream Orchids", image: "./src/assets/Pastel Dream Orchids.png", currentPrice: "89.00", oldPrice: "105.00", rating: 5, badge: null },
    { id: 16, name: "Saffron Sunrise Tulips", image: "./src/assets/Saffron Sunrise Tulips.png", currentPrice: "39.00", oldPrice: "52.00", rating: 4, badge: "-25%" },

];

const DATA_BESTSELLERS = [
    { id: 17, name: "Crimson Velvet Roses", image: "./src/assets/Crimson Velvet Roses.png", currentPrice: "62.00", oldPrice: "75.00", rating: 5, badge: "Top Seller" },
    { id: 18, name: "Valentine Red Rose", image: "./src/assets/Valentine Red Rose.png", currentPrice: "35.00", oldPrice: "45.00", rating: 4, badge: "Top Seller" },
    { id: 19, name: "Majestic Fuchsia Cascade", image: "./src/assets/Majestic Fuchsia Cascade.png", currentPrice: "62.00", oldPrice: "75.00", rating: 5, badge: "Top Seller" },
    { id: 20, name: "Golden Yellow", image: "./src/assets/Golden Yellow.png", currentPrice: "62.00", oldPrice: "75.00", rating: 5, badge: "Top Seller" },

];



// Mobile Navbar Handler
export function initMobileNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const topLine = document.getElementById('hamburger-top');
    const midLine = document.getElementById('hamburger-mid');
    const botLine = document.getElementById('hamburger-bot');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-y-0');

        if (!isOpen) {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none', 'invisible');
            mobileMenu.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto', 'visible');
            topLine.classList.add('rotate-45', 'translate-y-2');
            midLine.classList.add('opacity-0', 'scale-0');
            botLine.classList.add('-rotate-45', '-translate-y-2');
        } else {
            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto', 'visible');
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none', 'invisible');
            topLine.classList.remove('rotate-45', 'translate-y-2');
            midLine.classList.remove('opacity-0', 'scale-0');
            botLine.classList.remove('-rotate-45', '-translate-y-2');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto', 'visible');
            mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none', 'invisible');
            topLine.classList.remove('rotate-45', 'translate-y-2');
            midLine.classList.remove('opacity-0', 'scale-0');
            botLine.classList.remove('-rotate-45', '-translate-y-2');
        }
    });
}

// Tab Filter Switcher
function initProductTabs() {
    const btnNew = document.getElementById('tab-new');
    const btnFeatured = document.getElementById('tab-featured');
    const btnBestsellers = document.getElementById('tab-bestsellers');
    const allButtons = [btnNew, btnFeatured, btnBestsellers];

    if (!btnNew || !btnFeatured || !btnBestsellers) return;

    function setActiveTab(activeBtn, targetData) {
        allButtons.forEach(btn => {
            btn.classList.remove('bg-red-berry', 'text-white', 'shadow-sm');
            btn.classList.add('text-red-berry', 'hover:bg-red-berry/10');
        });

        activeBtn.classList.remove('text-red-berry', 'hover:bg-red-berry/10');
        activeBtn.classList.add('bg-red-berry', 'text-white', 'shadow-sm');

        // Dynamically updates the display grid node elements
        renderProductGrid('featured-showcase-grid', targetData);
    }

    btnNew.addEventListener('click', () => setActiveTab(btnNew, NEW_ARRIVALS));
    btnFeatured.addEventListener('click', () => setActiveTab(btnFeatured, DATA_FEATURED));
    btnBestsellers.addEventListener('click', () => setActiveTab(btnBestsellers, DATA_BESTSELLERS));
}

// CENTRAL DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    initMobileNavigation();
    initProductTabs();
    renderProductGrid('product-display-grid', NEW_ARRIVALS);

    initTestimonialSlider();

    renderProductGrid('featured-showcase-grid', NEW_ARRIVALS);

});

