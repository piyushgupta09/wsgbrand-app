<template>
    <div class="">
        <form @submit.prevent="submitUserUpdate">
            <ProfileImageUpload @fileSelected="handleFile" :image="user.image" />

            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" placeholder="Name" v-model="form.name" required />
                <label>Full Name</label>
            </div>

            <div class="btn-group w-100 border shadow">
                <submit-button class="btn btn-dark">Update Details</submit-button>
            </div>
        </form>
        <form @submit.prevent="submitPasswordUpdate">
            <div class="form-floating mb-3 mt-3">
                <input type="password" class="form-control" placeholder="Password" v-model="password" required />
                <label>Password</label>
            </div>
            
            <div class="form-floating mb-3 mt-3">
                <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirm" required />
                <label>Confirm Password</label>
            </div>

            <div class="btn-group w-100 border shadow">
                <submit-button class="btn btn-dark">Update Password</submit-button>
            </div>
        </form>
        <nav class="shadow border m-2 mt-4">
            <button type="button" class="btn text-danger w-100 rounded-0" @click.stop="logoutSession">
                <span class="font-title">Logout Session</span>
            </button>
        </nav>
    </div>
</template>

<script>
import SubmitButton from "@/components/buttons/SubmitButton.vue";
import ProfileImageUpload from "../ProfileImageUpload.vue";

export default {
    name: "ProfileBasicDetail",
    data() {
        return {
            form: {},
            password: "",
            confirm: "",
        };
    },
    components: {
        SubmitButton,
        ProfileImageUpload,
    },
    computed: {
        user() {
            return this.$store.getters["authy/user"];
        },
    },
    watch: {
        user: {
            handler(newValue) {
                this.form = {
                    name: newValue.name,
                    image: newValue.image,
                };
            },
            immediate: true,
        },
    },
    methods: {
        submitPasswordUpdate() {
            this.$store.dispatch("authy/updatePassword", {
                password: this.password,
                password_confirmation: this.confirm,
            });
        },
        submitUserUpdate() {
            const formData = new FormData();
            Object.keys(this.form).forEach((key) => {
                formData.append(key, this.form[key]);
            });
            this.$store.dispatch("authy/updateUser", formData);
        },
        handleFile(file) {
            this.form.image = file;
        },
        logoutSession() {
            this.$store.dispatch("authy/sendLogoutRequest");
        },
    },
};
</script>
