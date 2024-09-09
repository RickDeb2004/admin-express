document.addEventListener('DOMContentLoaded', () => {
    const tableList = document.getElementById('table-list');
    const tableContent = document.getElementById('table-content');

    // Define the tables with their URLs
    const tables = [
        { name: 'Users', url: '/users', icon: 'fas fa-user' },
       
    ];

    // Populate the sidebar with table names and icons
    tables.forEach((table) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = table.url;
        a.innerHTML = `<i class="${table.icon}"></i> ${table.name}`;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            tableContent.src = table.url;
            window.history.pushState(null, null, table.url);
        });
        li.appendChild(a);
        tableList.appendChild(li);
    });

    // Load the first table by default
    if (tables.length > 0) {
        tableContent.src = tables[0].url;
    }
});
