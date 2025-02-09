function switchTab(tabId) {
    const sections = document.querySelectorAll('.content-section');
    const tabs = document.querySelectorAll('.tabs button');

    sections.forEach(section => section.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
}

function disableEmptyLinks() {
    const links = document.querySelectorAll('a[href=""]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
        });
        link.style.pointerEvents = 'none';
        link.style.cursor = 'default';
        link.style.color = 'gray'; // Optional: Change color to indicate it's disabled
    });
}

// Call the function after the DOM has loaded
document.addEventListener('DOMContentLoaded', disableEmptyLinks);