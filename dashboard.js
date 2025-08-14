const users = [
    { name: "John Doe", email: "john@example.com", status: "online" },
    { name: "Jane Smith", email: "jane@example.com", status: "offline" },
    { name: "Mike Johnson", email: "mike@example.com", status: "online" },
    { name: "Sarah Wilson", email: "sarah@example.com", status: "online" },
    { name: "Tom Brown", email: "tom@example.com", status: "offline" }
];

function renderUsers(filter = 'all') {
    const userList = document.getElementById('userList');
    const filteredUsers = filter === 'all' ? users : users.filter(user => user.status === filter);
    
    userList.innerHTML = filteredUsers.map(user => `
        <div class="user-item">
            <div class="user-info">
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
            </div>
            <div class="status ${user.status}">${user.status}</div>
        </div>
    `).join('');
}

function refreshUsers() {
    const filter = document.getElementById('statusFilter').value;
    renderUsers(filter);
}

document.getElementById('statusFilter').addEventListener('change', function() {
    renderUsers(this.value);
});

renderUsers();