import Cookies from 'js-cookie';

export function beforeEnterRoute(to, from, next) {
    // Simplify authentication and verification checks
    const isAuth = ['true', true].includes(localStorage.getItem('auth')) || Cookies.get('auth') === 'true';
    const isVerified = ['true', true].includes(localStorage.getItem('verified')) || Cookies.get('verified') === 'true';

    if (!isAuth) {
        console.log('Redirect to Login');
        next({ name: 'Login' }); // Redirect user to Login route if not authenticated
    } else if (!isVerified) {
        console.log('Redirect to Verify');
        next({ name: 'VerifyEmail' }); // Redirect user to VerifyEmail route if not verified
    } else {
        console.log('Proceed');
        next(); // If authenticated and verified, proceed with the current routing
    }
}
