const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});

const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.transform = 'translateY(0)';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.transform = 'translateY(20px)';
    }
});

const subtitles = ["a Penetration Tester", "Saudi", "a Cybersecurity Student", "an Ethical Hacker", "a Red Teamer",  "a Team Player", "a Continuous Learner"];
let currentIndex = 0;
const dynamicSubtitle = document.getElementById("dynamic-subtitle");

function cycleSubtitles() {
    
    dynamicSubtitle.classList.add("hidden");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % subtitles.length;
        dynamicSubtitle.textContent = subtitles[currentIndex];
        dynamicSubtitle.classList.remove("hidden");
    }, 1000); 
}

setInterval(cycleSubtitles, 3000); 


const emailLink = document.getElementById("email-link");
const emailPopup = document.getElementById("email-popup");
const copyEmailButton = document.getElementById("copy-email");
const copyFeedback = document.getElementById("copy-feedback");

emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    emailPopup.style.display = "block";
});

copyEmailButton.addEventListener("click", () => {
    navigator.clipboard.writeText("nader_alharbi@outlook.com").then(() => {
        copyFeedback.style.display = "block"; 
        setTimeout(() => {
            copyFeedback.style.display = "none"; 
        }, 2000);
    });
});

const certificateCards = document.querySelectorAll(".certificate-card");
const certificatePopup = document.getElementById("certificate-popup");
const certificatePopupImg = document.getElementById("certificate-popup-img");
const certificatePopupDescription = document.getElementById("certificate-popup-description");

certificateCards.forEach((card) => {
    card.addEventListener("click", () => {
        const imgSrc = card.querySelector(".certificate-img img").src;
        const description = card.querySelector(".certificate-description").innerHTML;
        certificatePopupImg.src = imgSrc;
        certificatePopupDescription.innerHTML = description;
        certificatePopup.style.display = "block";
    });
});

const projectCards = document.querySelectorAll(".project-card");
const projectPopup = document.getElementById("project-popup");
const projectPopupVideo = document.getElementById("project-popup-video");
const projectPopupInfo = document.getElementById("project-popup-info");

projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const videoSrc = `vid/video${index + 1}.webm`; 
        const info = card.querySelector(".project-info").innerHTML;
        projectPopupVideo.src = videoSrc;
        projectPopupInfo.innerHTML = info;
        projectPopup.style.display = "block";
    });
});

const closePopupButtons = document.querySelectorAll(".close-popup");

closePopupButtons.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        document.querySelectorAll(".popup").forEach((popup) => {
            popup.style.display = "none";
        });
    });
});

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
    }
});