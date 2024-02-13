<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <h1>404 page Not Found</h1>
                <p>There was a problem connecting to the server. Please try again later.</p>
                <router-link to="/">Home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '@/services/store';

export default {
    name: "NetworkError",
    mounted() {
        Store.dispatch('setToast', {
            message: 'Network error. Please check your connection and try again.',
            color: 'danger',
            duration: 5000
        });
    },
}
</script>
