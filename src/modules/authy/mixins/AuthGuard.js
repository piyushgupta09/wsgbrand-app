import Cookies from 'js-cookie';

export function beforeEnterRoute(to, from, next) {
    const isAuth = localStorage.getItem('auth') === 'true' || Cookies.get('auth') === 'true';
    const isVerified = localStorage.getItem('verified') === 'true' || Cookies.get('verified') === 'true';

    if (!isAuth) {
        // Redirect to Login if not authenticated
        console.log('Redirect to Login');
        next({ name: 'Login' });
    } else if (isAuth && !isVerified) {
        // Redirect to Verify if authenticated but not verified
        console.log('Redirect to Verify');
        next({ name: 'VerifyEmail' });
    } else if (isAuth && isVerified) {
        // Proceed if authenticated and verified
        console.log('Proceed');
        next();
    }
}
