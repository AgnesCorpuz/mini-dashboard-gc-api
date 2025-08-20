const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance;

const users = [
    { name: "John Doe", email: "john@example.com", status: "available" },
    { name: "Jane Smith", email: "jane@example.com", status: "away" },
    { name: "Mike Johnson", email: "mike@example.com", status: "busy" },
    { name: "Sarah Wilson", email: "sarah@example.com", status: "offline" },
    { name: "Tom Brown", email: "tom@example.com", status: "unkown" }
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('statusFilter').addEventListener('change', function() {
        renderUsers(this.value);
    });
});

renderUsers();

// TODO: Set up Genesys Cloud Platform Client
// 1. Create API instances: const usersApi = new platformClient.UsersApi();
// 2. Create presence API: const presenceApi = new platformClient.PresenceApi();
// 3. Set environment: client.setEnvironment('mypurecloud.com');
// 4. Authenticate: client.loginImplicitGrant('YOUR_CLIENT_ID', 'http://localhost:3000/');

// TODO: Fetch users from Genesys Cloud API and display in UI
// 1. After successful authentication, call usersApi.getUsers()
// 2. Extract user data from response.entities
// 3. Replace the static users array with API data
// 4. Call fetchPresenceData() to get the presence status for each user
// 5. Call renderUsers() to display the fetched users
// 6. Handle errors and show loading states

// TODO: Implement fetchPresenceData function
// This function should:
// 1. Use presenceApi.getUserPresencesPurecloud(user.id) for each user
// 2. Update user.status with presence.presenceDefinition.systemPresence
// 3. Handle errors and set status to 'Unknown' if API call fails
// 4. Return a Promise that resolves when all presence data is fetched
function fetchPresenceData() {
    // Your implementation here
    return Promise.resolve();
}

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