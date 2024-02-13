<template>
    <div v-if="toast.show" :class="['alert', toastClasses]" role="alert">
        {{ toast.message }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'AppToast',
    computed: {
        ...mapGetters(['toast']),
        toastClasses() {
            let classes = {
                'alert-success': this.toast.type === 'success',
                'alert-danger': this.toast.type === 'error',
                'alert-warning': this.toast.type === 'warning',
                'alert-info': this.toast.type === 'info' || !this.toast.type,
            };

            // Add position classes if needed
            if (this.toast.position) {
                classes['toast-position-' + this.toast.position] = true;
            }

            return classes;
        }
    },
    watch: {
        'toast.show'(newVal) {
            if (newVal) {
                setTimeout(() => {
                    this.$store.commit('hideToast'); // Assuming you have a mutation to hide the toast
                }, 4000); // Duration of the toast
            }
        }
    }
}
</script>

<style scoped>
/* Add custom CSS for position if needed */
.toast-position-bottom {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.toast-position-top {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

/* Add more position styles as per your requirements */
</style>
