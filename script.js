window.onload = function () {
    const wipeLayer = document.querySelector(".wipe-layer");
    const projectItems = document.querySelectorAll(".projectitem");

    if (!wipeLayer) {
        console.error("❌ Element with class 'wipe-layer' not found!");
        return;
    }

    projectItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            const title = this.dataset.title;
            const image = this.dataset.image;
            const description = this.dataset.description;

            wipeLayer.innerHTML = `
                <h2>${title}</h2>
                <img src="${image}" alt="${title}">
                <p>${description}</p>
            `;

            wipeLayer.style.clipPath = "inset(0 0 0 0)"; // Wipe-in animation
        });

        item.addEventListener("mouseout", function () {
            wipeLayer.style.clipPath = "inset(0 100% 0 0)"; // Hide wipe layer
        });
    });
};
window.onload = function () {
    const wipeLayer = document.querySelector(".wipe-layer");
    const projectItems = document.querySelectorAll(".projectitem");

    if (!wipeLayer) {
        console.error("❌ Element with class 'wipe-layer' not found!");
        return;
    }

    projectItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            const title = this.dataset.title;
            const image = this.dataset.image;
            const description = this.dataset.description;

            wipeLayer.innerHTML = `
                <img src="${image}" alt="${title}">
                <p>${description}</p>
            `;

            wipeLayer.style.clipPath = "inset(0 0 0 0)"; // Wipe-in animation
        });

        item.addEventListener("mouseout", function () {
            wipeLayer.style.clipPath = "inset(0 100% 0 0)"; // Hide wipe layer
        });
    });
};
