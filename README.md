# Mini Dashboard using Genesys Cloud API

## Objective
Create a simple web-based dashboard that:
- Authenticates a user via Genesys Cloud OAuth (Client Credentials)
- Fetches and displays a list of active users in the organization
- Displays each user’s:
  - Name
  - Presence status (e.g., Available, Busy, Offline)
  - Email

### Bonus Objectives (Optional):
- Filter users by presence status by adding a dropdown or buttons to filter users by presence (Available, Away, Offline, etc.).
- Re-fetch presence data by adding a "Refresh" button.
- Add error handling (e.g. expired token, API errors).

## Requirements
- Authentication
  - Use OAuth 2.0 with Genesys Cloud (Client Credentials).
  - After login, store the access token and use it in API calls (if using the native fetch call).
- API Usage
  - Use the `/api/v2/users` endpoint to list users.
  - Use `/api/v2/users/{userId}/presences/purecloud` to fetch presence info for each user.
  - Use Authorization: `Bearer {token}` in headers (if using the native fetch call).

## What This Tests
- REST APIs and headers usage.
- OAuth 2.0 knowledge.
- JavaScript async/await or Promises.
- DOM manipulation and user interaction.
- Time and scope management under pressure.

## Tools Allowed
- Plain HTML/CSS/JS only.
- You may use browser DevTools or Postman for testing.
- No back-end server needed.
- You may also use the Genesys Cloud Platform API Client JavaScript SDK for ease of access to Genesys Cloud API via direct use in browser script. Use
the latest version:
  ```
  https://sdk-cdn.mypurecloud.com/javascript/latest/purecloud-platform-client-v2.min.js
  ```

> :bulb: The GitHub repository of the SDK is located [here](https://github.com/MyPureCloud/platform-client-sdk-javascript).

## Notes
- You may research things in the browser. Chatbots are **prohibited**.
- Client Credentials will be provided.







A simple, responsive web dashboard for displaying user information with filtering capabilities.

## Features

- **User List Display**: Shows user name, email, and presence status
- **Status Filtering**: Filter users by online/offline status or view all
- **Refresh Functionality**: Manual refresh button to reload user data
- **Responsive Design**: Grid-based layout that adapts to different screen sizes
- **Clean UI**: Modern card-based interface with color-coded status indicators

## Files

- `dashboard.html` - Main HTML structure
- `dashboard.css` - Styling and layout
- `dashboard.js` - JavaScript functionality for user management and filtering

## Usage

1. Open `dashboard.html` in a web browser
2. Use the dropdown to filter users by status (All Users, Online, Offline)
3. Click "Refresh" to reload the user list
4. Users are displayed with their name, email, and current status

## Status Indicators

- **Online**: Blue badge indicating user is currently online
- **Offline**: Red badge indicating user is currently offline

## Technical Details

- Pure HTML, CSS, and JavaScript (no external dependencies)
- CSS Grid for responsive layout
- Event-driven filtering and refresh functionality
- Sample user data included for demonstration

## Browser Compatibility

Compatible with all modern web browsers that support CSS Grid and ES6 JavaScript features.