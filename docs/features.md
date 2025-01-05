# Functional Features of Challenge Forum  

1. **View Challenges**:  
   1. Load challenges from an API when the page is initialized.  
   2. Render the list of challenges dynamically from the fetched data.  
   3. Allow users to view challenge details when a challenge is selected.  
   4. Display tips (if available) by clicking on a "View Tips" button.  

2. **Submit Solutions**:  
   1. Allow users to submit a solution to a challenge using a POST request to the API.  
   2. Validate solution input before submission to ensure correctness and completeness.  
   3. Show a success or error message based on the API response.  

3. **Manage Challenges** (Admin Only):  
   1. Add a new challenge using a POST request to the API.  
   2. Delete an existing challenge using a DELETE request to the API.  
   3. Update challenge details using a PUT request to the API.  
   4. Validate all input data for creating or updating challenges to ensure consistency and error-free submissions.  

4. **Login**:  
   1. Allow admin users to log in using a POST request to the API.  
   2. Allow regular users to log in using a POST request to the API.  
   3. Display appropriate error messages for invalid credentials or failed login attempts.  
   4. Redirect users/admins to their respective dashboards after successful login.  

5. **Session Management**:  
   1. Store the user’s login session securely in local storage.  
   2. Include session expiry to ensure users are logged out after a set time of inactivity.  
   3. Validate the session on each page load to maintain login status.  
   4. Provide a logout feature to clear the session from local storage.  

 