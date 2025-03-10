// Show the projects section (Slide Up)
function showProjects() {
    document.getElementById('projectsPage').style.bottom = "0";
}

// Hide projects (Slide Down)
function hideProjects() {
    document.getElementById('projectsPage').style.bottom = "-100vh";
}

// Scroll Projects Left and Right
let scrollPosition = 0;

function scrollProjects(direction) {
    const carousel = document.querySelector('.projects-carousel');
    const projectWidth = document.querySelector('.project').offsetWidth + 50; // Adjusted spacing
    const maxScroll = (carousel.scrollWidth - carousel.clientWidth); // Total scrollable width

    if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - projectWidth, 0);
    } else if (direction === 'right') {
        scrollPosition = Math.min(scrollPosition + projectWidth, maxScroll);
    }

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

// Open a project in a new tab
function openProject(projectUrl) {
    window.open(projectUrl, "_blank");
}
