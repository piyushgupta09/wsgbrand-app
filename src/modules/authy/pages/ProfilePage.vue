<template>
    <div class="small">

        <form class="px-3 pb-3 pt-2" @submit.prevent="submitUserUpdate">

            <ProfileImageUpload @fileSelected="handleFile" :image="user.image" />

            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" placeholder="Name" v-model="form.name" required />
                <label>Profile Name</label>
            </div>

            <submit-button class="btn rounded-0 w-100 btn-outline-dark opacity-75">Update Profile Details</submit-button>
           
        </form>
        
        <form class="px-3 pb-3 pt-2" @submit.prevent="submitPasswordUpdate">
            <p class="text-muted ps-2 font-title">Change Password</p>
            <div class="form-floating mb-3 mt-3">
                <input type="password" class="form-control" placeholder="Password" v-model="password" required />
                <label>Password</label>
            </div>
            
            <div class="form-floating mb-3 mt-3">
                <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirm" required />
                <label>Confirm Password</label>
            </div>

            <submit-button class="btn rounded-0 w-100 btn-outline-dark opacity-75">Update Password</submit-button>

        </form>

    </div>
</template>

<script>
import SubmitButton from "@/components/buttons/SubmitButton.vue";
import ProfileImageUpload from "../components/ProfileImageUpload.vue";

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
    },
};
</script>
