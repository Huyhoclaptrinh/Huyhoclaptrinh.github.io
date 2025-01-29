function switchTab(tabId) {
    const sections = document.querySelectorAll('.content-section');
    const tabs = document.querySelectorAll('.tabs button');

    sections.forEach(section => section.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
}
