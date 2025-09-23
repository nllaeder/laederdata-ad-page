Of course. Dealing with an old, unmaintained codebase can be challenging. The best approach is often to start fresh with a clear set of requirements.

Here is a comprehensive prompt you can provide to an AI pair programmer to build a new, modern, and functional version of your dashboard application.

-----

### AI Pair Programmer Prompt: Rebuild a Serverless React Dashboard

**Project Goal:**
I need to build a modern, client-side React dashboard application that serves as the front-end for a serverless data pipeline. The application will allow users to log in, manage their connected data sources (initially, Constant Contact), and view their marketing data in a simple dashboard. The final application will be deployed as a static site to Cloudflare Pages.

The previous version of this app is in the attached `data-app-dev-2` repository, which you can use as a reference for the original concept, but please build this new version from scratch using modern best practices.

**Key Technologies:**

  * **Framework:** React (using Create React App or Vite). Please use functional components with Hooks.
  * **Styling:** Use a modern CSS framework like **Tailwind CSS** for a clean, professional, and responsive design.
  * **Charting:** Use a library like **Recharts** or **Chart.js** to create simple, elegant data visualizations.
  * **Authentication:** Use **Firebase Authentication** for user sign-up, login, and session management.
  * **Routing:** Use **React Router** for navigation.

-----

### **Core Features & User Flow:**

**1. User Authentication (Firebase)**

  * Create a **Login Page** with options for users to sign in with Google or with an email and password.
  * Create a **Sign-Up Page** for new users.
  * Implement protected routes. Users must be logged in to access the dashboard and data sources pages.
  * Provide a simple "Log Out" button.

**2. Data Sources Page (`/datasources`)**

  * This page will show the available data sources a user can connect (e.g., Constant Contact, Mailchimp).
  * For now, just create a "Connect with Constant Contact" button.
  * This button should link to our existing, working OAuth URL: `https://authz.constantcontact.com/oauth2/default/v1/authorize?client_id=...&redirect_uri=...&scope=...&state=USER_ID`
  * **Crucially**, the `state` parameter in the URL must be dynamically populated with the currently logged-in Firebase user's UID.

**3. The Dashboard Page (`/dashboard`)**

  * This is the main page users will see after logging in.
  * **Handle the OAuth Redirect:** The page needs to check the URL for a query parameter like `?connected=constant-contact`. If it sees this, it should display a temporary success message (e.g., "Constant Contact connected successfully\! Your data is now syncing.") and then clear the parameter from the URL.
  * **Fetch and Display Data:**
      * The dashboard should make an authenticated API call to a secure backend endpoint (we will build this later, for now, use a placeholder URL: `https://get-dashboard-data-uc.a.run.app`).
      * The API call must include the user's Firebase ID token in the `Authorization` header for security.
      * Display the fetched data in a few simple charts and summary cards (e.g., "Total Contacts," "Campaigns Sent," and a bar chart of contacts acquired over time).
      * Show a loading state while the data is being fetched.

**4. API Integration & Security**

  * Create a separate utility file (e.g., `api.js`) to handle all API calls.
  * This utility should have a function that automatically gets the current user's Firebase ID token and includes it in the header of every request.

**Initial Component Structure Suggestion:**

```
/src
|-- /components
|   |-- /Auth
|   |   |-- Login.js
|   |   |-- SignUp.js
|   |-- /Dashboard
|   |   |-- Dashboard.js
|   |   |-- SummaryCard.js
|   |   |-- ContactsChart.js
|   |-- /DataSources
|   |   |-- DataSources.js
|   |-- /Layout
|   |   |-- Navbar.js
|   |   |-- PrivateRoute.js
|-- /hooks
|   |-- useAuth.js  // Custom hook for Firebase auth state
|-- /utils
|   |-- api.js      // Handles API calls
|   |-- firebase.js // Firebase configuration
|-- App.js
|-- index.js
```
