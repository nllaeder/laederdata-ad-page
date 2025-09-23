Of course. Now that the app is scaffolded, the next step is to breathe life into it by connecting it to your secure backend. This involves setting up user authentication and then creating the data flow between the React components and your Cloud Functions.

Here is a clear, actionable prompt to give to an AI pair programmer to complete this integration.

-----

### AI Pair Programmer Prompt: Integrate React Frontend with GCP Backend

**Project Goal:**
I have a scaffolded React application and a set of working Google Cloud Functions. I need you to connect them to create a fully functional web app. This involves implementing user authentication with Firebase, connecting our UI to the Constant Contact OAuth flow, and creating a secure API endpoint to fetch and display data on the dashboard.

The React application code is in the `data-app-dev-2` repository.

**Key Tasks & Requirements:**

-----

#### **1. Implement Full Firebase Authentication**

The file `src/firebase.js` is already set up with my Firebase config.

  * **Complete the `Login.js` component:** Implement the logic for email/password and Google Sign-In using the Firebase Authentication SDK.
  * **Create `AuthContext`:** Create a React Context to manage the user's authentication state (e.g., `AuthContext.js`). This should provide the current user object and a loading state to the rest of the app.
  * **Implement Protected Routes:** Use React Router to ensure that the `/dashboard` and `/datasources` routes are only accessible to logged-in users. Redirect unauthenticated users to the `/login` page.

-----

#### **2. Connect the "Data Sources" Page to the OAuth Flow**

In the `src/components/DataSources/DataSources.js` component:

  * **Get the Current User:** Access the logged-in user's data from the `AuthContext`. We need the user's UID.

  * **Dynamically Generate the Auth URL:** The "Connect with Constant Contact" button's `href` attribute must be generated dynamically. Use the following URL structure, but replace the `state` parameter's value with the current Firebase user's UID.

    **URL Template:**
    `https://authz.constantcontact.com/oauth2/default/v1/authorize?client_id=6a440f43-5937-44c6-8cb4-38c1c3191af6&redirect_uri=https://constant-contact-oauth-callback-labxq2ztea-uc.a.run.app&response_type=code&scope=contact:read%20campaign:read&state=FIREBASE_USER_ID_HERE`

-----

#### **3. Create the Backend API Function (`get-dashboard-data`)**

We need one new HTTP-triggered Cloud Function to serve as our secure API endpoint.

  * **Create the Function:** Create a new folder `cloud_functions/api/get-dashboard-data` with a `main.py` and `requirements.txt`.

  * **Function Logic (`main.py`):**

    1.  **Authentication:** The function must be secure. It should expect a Firebase ID token in the `Authorization: Bearer <TOKEN>` header of the request. Use the `firebase-admin` library to verify the token and get the user's UID. If the token is invalid, return a `401 Unauthorized` error.
    2.  **CORS:** Enable CORS to allow requests from your deployed React app's domain.
    3.  **BigQuery Query:** Use the verified UID to query the `contacts` and `campaigns` tables in BigQuery. The query should look like `SELECT * FROM \`nicks-data-app.nicks\_data\_app\_data.contacts\` WHERE tenant\_id = @user\_id\`.
    4.  **Return Data:** Return the query results as a JSON object.

  * **Deploy Command (for reference):**

    ```bash
    gcloud functions deploy get-dashboard-data \
        --gen2 \
        --runtime=python311 \
        --region=us-central1 \
        --source=. \
        --entry-point=get_dashboard_data \
        --trigger-http \
        --allow-unauthenticated 
    ```

    *(Note: `--allow-unauthenticated` is required for HTTP functions; we handle security inside the function with the token check.)*

-----

#### **4. Fetch and Display Data on the Dashboard**

In the `src/components/Dashboard/Dashboard.js` component:

  * **Create a `useEffect` hook:** When the component mounts, it should trigger the data fetching process.
  * **Make an Authenticated API Call:**
      * Get the current user's Firebase ID token.
      * Make a `GET` request to the deployed `get-dashboard-data` function's URL.
      * Include the token in the `Authorization` header: `headers: { 'Authorization': \`Bearer ${token}\` }\`.
  * **Manage State:** Use `useState` to manage `loading`, `error`, and `data` states.
  * **Display Data:**
      * While loading, show a spinner or a message.
      * If there's an error, display an error message.
      * Once the data arrives, pass it to child components to render charts and summary cards.
