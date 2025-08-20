# Mini Dashboard using Genesys Cloud API

## Objective
Create a simple web-based dashboard that:
- Authenticates a user via Genesys Cloud OAuth (Implicit Grant)
- Fetches and displays a list of active users in the organization
- Displays each user’s:
  - Name
  - Presence status (e.g., Available, Busy, Offline)
  - Email

### Bonus Objectives (Optional):
- Filter users by presence status using a dropdown menu with options for Available, Away, Busy, Offline, and Unknown statuses.
- Re-fetch presence data by adding a "Refresh" button.
- Add error handling (e.g. expired token, API errors).
- Add "Loading users..." prompt while fetching data

## Requirements
- Authentication
  - Use OAuth 2.0 with Genesys Cloud (Implicit Grant).
  - Use `http://localhost:3000/` or `http://localhost:8080/`
- API Usage
  - Use the `/api/v2/users` endpoint to list users.
  - Use `/api/v2/users/{userId}/presences/purecloud` to fetch presence info for each user.

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

> :bulb: View the documentation at https://mypurecloud.github.io/platform-client-sdk-javascript/.

## Notes
- You may research things in the browser. Chatbots are **prohibited**.
- Implicit Grant Client ID and temporary user accesss will be provided.