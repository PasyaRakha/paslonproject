let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab'); // Tambahkan deklarasi ini

window.addEventListener("scroll", () => {
    // Get the current scroll position
    let top = window.scrollY;

    // Apply parallax effect manually for each element
    listBg.forEach((bg) => {
        // Get direction and speed from data attributes
        let direction = bg.dataset.direction; // "right", "left", "down"
        let speed = parseFloat(bg.dataset.speed); // Speed multiplier

        // Apply transform based on direction
        if (direction === "right") {
            bg.style.transform = `translateX(${top * speed}px)`;
        } else if (direction === "left") {
            bg.style.transform = `translateX(${-top * speed}px)`;
        } else if (direction === "down") {
            bg.style.transform = `translateY(${top * speed}px)`;
        }
    });

    // Handle tab animation
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

function createmovingimage(){

    const container = document.querySelector('.kururing');
    
    // Buat elemen gambar baru
    const newImage = document.createElement('img');
    newImage.src = 'assets/kurukuru-kururing.gif'; // Ganti dengan URL gambar Anda
    newImage.classList.add('image');
    
    // Atur posisi awal secara random (opsional, untuk variasi vertikal)
    
    // Tambahkan gambar ke kontainer
    container.appendChild(newImage);
    
    // Trigger animasi
    setTimeout(() => {
        newImage.style.transform = 'translateX(-200vw) translateY(-50%)'; // Bergerak ke kiri
    }, 50); // Jeda kecil untuk memastikan CSS diterapkan

    // Hapus elemen setelah animasi selesai (2 detik sesuai dengan CSS transition)
    setTimeout(() => {
        container.removeChild(newImage);
    }, 2000);
};
