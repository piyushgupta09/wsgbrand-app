<template>
    <div class="px-4" style="padding-top: 20px;">
        <div class="d-flex flex-column align-items-center text-center">
            <i class="bi bi-person-lock" style="font-size:100px;color: #E35D6A;"></i>
            <h1>Update Password</h1>
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-md-6">
                <form @submit.prevent="resetPassword">

                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email"
                            v-model="currentPassword" required>
                        <label for="floatingInput" class="text-muted">Current Password</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="newPassword"
                            required>
                        <label for="floatingInput" class="text-muted">New Password</label>
                    </div>
                    <div class="w-100 p-2 form-floating container">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Email"
                            v-model="confirmPassword" required>
                        <label for="floatingInput" class="text-muted">Confirm Password</label>
                    </div>

                    <div class="d-flex justify-content-center mt-4 p-2">
                        <button class="btn top-brand   w-100 fs-5">
                            Update Password
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        };
    },
    methods: {
        resetPassword() {
            alert('Password reset successful!');
            this.email = '';
            this.newPassword = '';
            this.confirmPassword = '';
        }
    }
};
</script>
    
    