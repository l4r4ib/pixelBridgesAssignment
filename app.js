console.log('it works')


const toggleButton = document.getElementById('toggleSidebar');
const closeSidebarButton = document.getElementById('closeSidebar');
const navLinks = document.querySelector('.nav-links');

const toggleSidebar = () => {
    navLinks.classList.toggle('show-sidebar');
    document.body.classList.toggle('no-scroll');
};

const closeSidebar = () => {
    navLinks.classList.remove('show-sidebar');
    document.body.classList.remove('no-scroll');
};

toggleButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', closeSidebar);