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
    const projectWidth = document.querySelector('.project').offsetWidth + 15; // 15px gap
    const containerWidth = document.querySelector('.projects-wrapper').offsetWidth;
    const visibleProjects = Math.min(20, Math.floor(containerWidth / projectWidth));
    const maxScroll = (carousel.children.length - visibleProjects) * projectWidth;

    if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - (projectWidth * visibleProjects), 0);
    } else if (direction === 'right') {
        scrollPosition = Math.min(scrollPosition + projectWidth * 1.5, maxScroll);
    }

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

// Open a project in a new tab
function openProject(projectUrl) {
    window.open(projectUrl, "_blank");
}
