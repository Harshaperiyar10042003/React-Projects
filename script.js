function showProjects() {
    document.getElementById('projectsPage').style.bottom = "0";
}

function hideProjects() {
    document.getElementById('projectsPage').style.bottom = "-100vh";
}

let scrollPosition = 0;

function scrollProjects(direction) {
    const carousel = document.querySelector('.projects-carousel');
    const projectWidth = document.querySelector('.project').offsetWidth + 20;
    const maxScroll = (carousel.scrollWidth - carousel.clientWidth);

    if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - projectWidth, 0);
    } else if (direction === 'right') {
        scrollPosition = Math.min(scrollPosition + projectWidth, maxScroll);
    }

    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

function openProject(projectUrl) {
    window.open(projectUrl, "_blank");
}
