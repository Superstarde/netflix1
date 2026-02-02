const memories = [
    {
        category: "moments",
        title: "The First Date",
        date: "Feb 14, 2024",
        desc: "I remember how nervous I was, but your smile made it all better.",
        image: "assets/photos/date1.jpg",
        type: "image"
    },
    {
        category: "trips",
        title: "Summer in Paris",
        date: "July 2024",
        desc: "The Eiffel tower wasn't nearly as beautiful as you.",
        video: "assets/videos/paris.mp4",
        type: "video"
    }
];

function entrySequence(name) {
    document.getElementById('profile-screen').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('profile-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        loadMemories();
    }, 800);
}

function loadMemories() {
    const momentsRow = document.getElementById('moments-row');
    const tripsRow = document.getElementById('trips-row');

    memories.forEach(mem => {
        const img = document.createElement('img');
        img.src = mem.type === "video" ? "assets/photos/video-placeholder.jpg" : mem.image;
        img.className = 'poster';
        img.onclick = () => openModal(mem);
        
        if(mem.category === "moments") momentsRow.appendChild(img);
        else tripsRow.appendChild(img);
    });
}

function openModal(mem) {
    const modal = document.getElementById('modal');
    const container = document.getElementById('modal-media-container');
    
    document.getElementById('modal-title').innerText = mem.title;
    document.getElementById('modal-date').innerText = mem.date;
    document.getElementById('modal-desc').innerText = mem.desc;

    if(mem.type === "video") {
        container.innerHTML = `<video width="100%" controls autoplay><source src="${mem.video}" type="video/mp4"></video>`;
    } else {
        container.innerHTML = `<img src="${mem.image}" width="100%">`;
    }
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal-media-container').innerHTML = '';
}
