import Axios from "axios"
import Store from "@/services/store/"
import Router from "@/services/router"
import Token from "./token"
import ErrorHandler from "./errors"

// List of all base URLs for different environments
const baseUrls = {
  development: "http://localhost:9000/api",
  testing_alpha_v2: "http://192.168.1.183:9000/api",
  testing_alpha_v1: "http://192.168.1.184:9000/api",
  testing_beta: "http://192.168.1.5:9000/api",
  production: "https://server.wsgbrand.in/api"
};

// You can dynamically set the environment here
const currentEnvironment = "production";

// Setting base url for accessing server
Axios.defaults.baseURL = baseUrls[currentEnvironment];

// CORS and other headers
Axios.defaults.withCredentials = true
Axios.defaults.headers.post.Accept = "application/json"
Axios.defaults.headers.post.ContentType = "application/json"

// Request Interceptor
Axios.interceptors.request.use(

  // Here you can change the config before sending the request to the server
  (config) => {

    // Start any loading indicators here so that they can be stopped in the response interceptor
    Store.dispatch("startLoading");
    
    // Set the authorization header using the helper.
    return Token.setAuthHeader(config);

  },

  // Here you can handle errors that occur while sending the request
  (error) => {
    // Here handle errors related to the request creation itself
    // For example, problems with internet connectivity.
    // You may want to log these or present a specific user message.
    console.log('Request creation error: ' + error);
    return Promise.reject(error);
  }
);

// Response interceptor
Axios.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  (response) => {
    // Reset the global error bag to clear any previous errors.
    Store.dispatch("resetErrorsBag");

    // Stop any loading indicators as the request has successfully completed.
    Store.dispatch("stopLoading");

    // Additional status-based actions can be added here if needed
    // Example: Navigate to a 'NotFound' page if status is 'error'
    if (response.data.status === "error") {
      Router.push({ name: "NotFound" });
    }

    // Continue the response down the chain
    return response;
  },

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  (error) => {
    ErrorHandler.handleErrors(error, Store, Router);
  }
);

export default Axios;

/***
 * 
Certainly! In a real-world application, you'll likely have multiple environments like development, staging, and production. Each environment might have its own API server, and thus its own base URL.

A common practice is to use environment variables to dynamically set the base URL depending on which environment the application is running in. Here's how you can do it:

### Using `.env` Files for Environment Variables

Create a `.env` file for each environment you have. Typically, you'd have:

- `.env.development`
- `.env.staging`
- `.env.production`

In each of these files, you can set the API base URL for that environment:

```env
// .env.development
VUE_APP_API_BASE_URL=http://localhost:8000/api

// .env.staging
VUE_APP_API_BASE_URL=http://staging.yourserver.com/api

// .env.production
VUE_APP_API_BASE_URL=http://production.yourserver.com/api
```

### Access Environment Variables in the Code

Vue.js makes all variables prefixed with `VUE_APP_` available inside your application code. You can access these variables with `process.env`:

```javascript
Axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
```

This way, the base URL dynamically adjusts depending on the environment you are running the application in.

### Development Server Configuration

If you're using Vue CLI, it automatically picks up `.env` files. Make sure you specify which `.env` file to use when you run or build your application:

- Development: `vue-cli-service serve --mode development`
- Staging: `vue-cli-service build --mode staging`
- Production: `vue-cli-service build --mode production`

### Summary

By following this setup, you can have dynamic base URLs that automatically adjust based on the environment, making it easier to manage and deploy your application.
 * 
 */
