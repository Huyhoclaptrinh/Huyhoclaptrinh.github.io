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

document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 10;

    function createProjectPages(sectionId) {
        const section = document.getElementById(sectionId);
        const list = section.querySelector('ul'); // Get the main <ul> inside the section
        const items = Array.from(list.querySelectorAll('li.project-item')); // Select only <li> elements with class 'project-item'
        const totalItems = items.length;

        if (totalItems <= itemsPerPage) return; // No pagination if 10 or fewer project items

        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pages = []; // Store the dynamically created pages

        // Remove project items from the original <ul>
        items.forEach(item => list.removeChild(item));

        for (let i = 0; i < totalPages; i++) {
            // Create a new <ul> for each page
            let newList = document.createElement('ul');
            newList.classList.add('project-list');
            if (i !== 0) newList.style.display = 'none'; // Hide all except the first page

            // Move 10 <li.project-item> items to the new <ul>
            for (let j = i * itemsPerPage; j < (i + 1) * itemsPerPage && j < totalItems; j++) {
                newList.appendChild(items[j]);
            }

            section.appendChild(newList);
            pages.push(newList);
        }

        // Create pagination controls
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination';

        for (let i = 0; i < totalPages; i++) {
            let pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageButton);
        }

        section.appendChild(paginationContainer);

        function showPage(pageIndex) {
            pages.forEach((page, index) => {
                page.style.display = index === pageIndex ? 'block' : 'none';
            });

            // Update active button state
            const buttons = paginationContainer.getElementsByTagName('button');
            Array.from(buttons).forEach((button, index) => {
                button.classList.toggle('active', index === pageIndex);
            });
        }

        showPage(0); // Show the first page initially
    }

    // Apply pagination to the Projects section
    createProjectPages('projects');
});
