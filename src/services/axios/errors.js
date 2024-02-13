/**
 * Log the error to an external service.
 *
 * @param {Error} error - The error to be logged.
 */
const logErrorToService = (error) => {
  console.error('logErrorToService: ', error);
};


/**
 * Global error handling logic for Axios requests.
 *
 * @param {Error} error - The error thrown by Axios.
 * @param {Object} Store - The Vuex store instance.
 * @param {Object} Router - The Vue Router instance.
 * @returns {Promise} - A Promise rejection to continue the error down the chain.
 */
const handleErrors = (error, Store, Router) => {
  
  // Handle network errors (no response received)
  if (!error.response) {
    logErrorToService(error);
    return Promise.reject(error);
  }
  
  // Create an error bag containing relevant error data
  const ebag = {
    status: error.response ? error.response.status : undefined,
    statusText: error.response ? error.response.statusText : undefined,
    errors: error.response ? error.response.data.errors : undefined
  }

  /**
   * Dispatches error to Vuex state and resets loading state.
   */
  const resetLoadingAndDispatchErrors = () => {
    Store.dispatch('setErrorsBag', ebag).then(() => {
      Store.dispatch('setLoading', false);
    });
  };

  /**
   * Dispatches error, resets loading state, and navigates to "NotFound" route.
   */
  const resetLoadingAndDispatchErrorsAndNotFound = () => {
    Store.dispatch('setErrorsBag', ebag).then(() => {
      Store.dispatch('setLoading', false).then(() => {
        Router.replace({ name: 'NotFound' });
      });
    });
  };

  /**
   * Dispatches error, resets loading state, clears auth data, and navigates to "Login" route.
   */
  // const resetLoadingAndDispatchErrorsAndRedirectToLogin = () => {
  //   Store.dispatch('setErrorsBag', {}).then(() => {
  //     Store.dispatch('setLoading', false).then(() => {
  //       Store.dispatch('authy/clearAuthData').then(() => {
  //         Router.replace({ name: 'Login' });
  //       });
  //     });
  //   });
  // };

  // Handle different types of errors based on their status codes
  switch (ebag.status) {
    case 422:  // Unprocessable Entity
      resetLoadingAndDispatchErrors();
      break;
    case 404:  // Not Found Error
      resetLoadingAndDispatchErrorsAndNotFound();
      break;
    case 401:  // Unauthorized
    case 500:  // Internal Server Error
      // resetLoadingAndDispatchErrorsAndRedirectToLogin();
      break;
    default:   // Other errors
      resetLoadingAndDispatchErrors();
      break;
  }
};

export default {
  handleErrors,
};





// const handleErrors = (error, Store, Router) => {
  
//   if (!error.response) {
//     // handle network error
//     console.error('Network Error', error);
//     return Promise.reject(error);
//   }
  
//   const ebag = {
//     status: error.response ? error.response.status : undefined,
//     statusText: error.response ? error.response.statusText : undefined,
//     errors: error.response ? error.response.data.errors : undefined
//   }

//   const resetLoadingAndDispatchErrors = () => {
//     Store.dispatch('setErrorsBag', ebag).then(() => {
//       Store.dispatch('setLoading', false)
//     })
//   }
  
//   const resetLoadingAndDispatchErrorsAndNotFound = () => {
//     Store.dispatch('setErrorsBag', ebag).then(() => {
//       Store.dispatch('setLoading', false).then(() => {
//         Router.replace({ name: 'NotFound' })
//       })
//     })
//   }

//   const resetLoadingAndDispatchErrorsAndRedirectToLogin = () => {
//     Store.dispatch('setErrorsBag', ebag).then(() => {
//       Store.dispatch('setLoading', false).then(() => {
//         Store.dispatch('authy/clearAuthData').then(() => {
//           Router.replace({ name: 'Login' })
//         })
//       })
//     })
//   }

//   // console.log('Error Bag:', ebag);
//   switch (ebag.status) {

//     case 422: // Unprocessable Entity
//       resetLoadingAndDispatchErrors();
//       break;

//     case 404: // Not Found Error
//       resetLoadingAndDispatchErrorsAndNotFound();
//       break;

//     case 401: // Unauthorized
//     case 500: // Internal Server Error
//     default: // Other errors
//       resetLoadingAndDispatchErrorsAndRedirectToLogin();
//       break;
//   }
// };

// export default {
//   handleErrors,
// };
