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
    
    // Array berisi daftar file suara
    const sounds = [
        'assets/kurukuru.mp3',     // Suara pertama
        'assets/kururin.mp3', // Suara kedua
    ];

    // Pilih suara secara acak
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const randomSound = sounds[randomIndex];

    // Buat elemen audio dengan suara acak
    const sound = new Audio(randomSound);
    sound.play();
    
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

// Ambil elemen audio dan link
const song = document.getElementById("song");
const playReff = document.getElementById("playReff");

// Waktu mulai dan akhir reff dalam detik
const reffStartTime = 48; // Reff dimulai di detik ke-30
const reffEndTime = 47;   // Reff berakhir di detik ke-45

// Durasi fade-out dalam detik
const fadeOutDuration = 3;

// Tambahkan event listener untuk tautan
playReff.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah link default

    // Set waktu mulai lagu
    song.currentTime = reffStartTime;
    song.volume = 1; // Set volume penuh

    // Putar lagu
    song.play();

    // Atur waktu fade-out
    const fadeOutStart = (reffEndTime - fadeOutDuration) * 1000; // Dalam milidetik
    const fadeOutEnd = reffEndTime * 1000; // Dalam milidetik

    // Mulai fade-out
    setTimeout(() => fadeOutAudio(song, fadeOutDuration), fadeOutStart);

    // Pastikan lagu berhenti sepenuhnya setelah reff berakhir
    setTimeout(() => {
        song.pause();
        song.currentTime = 0; // Reset waktu lagu ke awal
    }, fadeOutEnd);
});

// Fungsi untuk efek fade-out
function fadeOutAudio(audio, duration) {
    const fadeSteps = 50; // Jumlah langkah fade-out
    const interval = (duration / fadeSteps) * 1000; // Interval antar langkah dalam milidetik
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
        if (currentStep < fadeSteps) {
            audio.volume -= 1 / fadeSteps; // Kurangi volume secara bertahap
            currentStep++;
        } else {
            clearInterval(fadeInterval); // Hentikan interval saat fade-out selesai
        }
    }, interval);
}



// Ambil elemen audio dan link
const audioElement = document.getElementById("audioElement");
const playButton = document.getElementById("playButton");

// Waktu mulai dan akhir reff dalam detik
const startReff = 25; // Reff dimulai di detik ke-30
const endReff = 45;   // Reff berakhir di detik ke-45

// Durasi fade-out dalam detik
const fadeDuration = 3;

// Tambahkan event listener untuk tautan
playButton.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah link default

    // Set waktu mulai lagu
    audioElement.currentTime = startReff;
    audioElement.volume = 1; // Set volume penuh

    // Putar lagu
    audioElement.play();

    // Atur waktu fade-out
    const fadeStartTime = (endReff - fadeDuration) * 1000; // Dalam milidetik
    const fadeEndTime = endReff * 1000; // Dalam milidetik

    // Mulai fade-out
    setTimeout(() => applyFadeOut(audioElement, fadeDuration), fadeStartTime);

    // Pastikan lagu berhenti sepenuhnya setelah reff berakhir
    setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset waktu lagu ke awal
    }, fadeEndTime);
});

// Fungsi untuk efek fade-out
function applyFadeOut(audio, duration) {
    const totalSteps = 50; // Jumlah langkah fade-out
    const stepInterval = (duration / totalSteps) * 1000; // Interval antar langkah dalam milidetik
    let currentStep = 0;

    const intervalId = setInterval(() => {
        if (currentStep < totalSteps) {
            audio.volume -= 1 / totalSteps; // Kurangi volume secara bertahap
            currentStep++;
        } else {
            clearInterval(intervalId); // Hentikan interval saat fade-out selesai
        }
    }, stepInterval);
}



