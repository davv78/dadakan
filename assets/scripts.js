document.querySelector('.next-button').addEventListener('click', function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html')) {
        window.location.href = 'halaman2.html';
    } else if (currentPage.includes('halaman2.html')) {
        window.location.href = 'halaman3.html';
    } else if (currentPage.includes('halaman3.html')) {
        window.location.href = 'halaman4.html';
    } else if (currentPage.includes('halaman4.html')) {
        window.location.href = 'halaman5.html';
    } else if (currentPage.includes('halaman5.html')) {
        alert("Pengagum setia no 1! Terima kasih sudah mengikuti semangat dino! 🦕💖");

    }
});

document.addEventListener('DOMContentLoaded', function () {
    const dinosaurs = [
        'assets/images/stegosaurus (1).png', // Replace with actual dinosaur image URLs
        'assets/images/triceratops.png',
        'assets/images/tyrannosaurus (1).png',
        'assets/images/dinosaur (1).png',
        'assets/images/dinosaur (2).png',
        'assets/images/stegosaurus (1).png',
    ];

    dinosaurs.forEach((src, index) => {
        const dino = document.createElement('img');
        dino.src = src;
        dino.className = `dinosaur dinosaur-${index + 1}`;
        document.body.appendChild(dino);
    });
});