function switchTab(tabId) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tabs button').forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[data-tab="${tabId}"]`).classList.add('active');
}

/* Disable Empty Links */
function disableEmptyLinks() {
    document.querySelectorAll('a[href=""]').forEach(link => {
        link.addEventListener('click', event => event.preventDefault());
        link.style.pointerEvents = 'none';
        link.style.color = 'gray';
    });
}

/* Pagination for Projects */
document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5;

    function paginateSection(sectionId) {
        const section = document.getElementById(sectionId);
        const items = Array.from(section.querySelectorAll('li.project-item'));
        const totalItems = items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const container = document.createElement('div');
        container.classList.add('pagination');

        let currentPage = 0;

        function showPage(page) {
            items.forEach((item, index) => {
                item.style.display = (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) ? 'block' : 'none';
            });

            document.querySelectorAll('.pagination button').forEach((btn, index) => {
                btn.classList.toggle('active', index === page);
            });
        }

        for (let i = 0; i < totalPages; i++) {
            let btn = document.createElement('button');
            btn.textContent = i + 1;
            btn.addEventListener('click', () => {
                currentPage = i;
                showPage(i);
            });
            container.appendChild(btn);
        }

        section.appendChild(container);
        showPage(0);
    }

    paginateSection('projects');
    disableEmptyLinks();
});
