<template>
    <div class="mb-4">
        <ImageUploadBox 
            :image="uploadedProfileImage"
            @fileSelected="handleImageUpload" 
        />
        <div class="container">
            
            <p class="my-3 text-bg-dark text-center w-100">Basic Info</p>
            <table class="table table-bordered">
                <tbody v-if="profile.user" class="table-light">
                    <tr>
                        <th class="table-secondary w-25">Name</th>
                        <td>{{ profile.user.name }}</td>
                    </tr>
                    <tr>
                        <th class="table-secondary">Mobile</th>
                        <td>{{profile.user.mobile}}</td>
                    </tr>
                    <!-- <tr>
                        <th class="table-secondary">Email</th>
                        <td>{{profile.user.email}}</td>
                    </tr>
                    <tr>
                        <th class="table-secondary">Password</th>
                        <td><button class="btn btn-sm top-brand opacity-75 text-white">Reset Password</button>
                        </td>
                    </tr> -->
                </tbody>
            </table>

            <div v-if="profile.party" >
                <p class="my-3 text-bg-dark text-center w-100">Business Info</p>
                <table class="table table-bordered">
                    <tbody class="table-light">
                        <tr>
                            <th class="table-secondary w-25">Business Name</th>
                            <td>{{ profile.party.business }}</td>
                        </tr>
                        <tr>
                            <th class="table-secondary">Gstin</th>
                            <td>{{profile.party.gstin}}</td>
                        </tr>
                        <tr>
                            <th class="table-secondary">Whatsapp</th>
                            <td>{{profile.party.mobile}}</td>
                        </tr>
                        <tr>
                            <th class="table-secondary">Contact</th>
                            <td>{{profile.party.contact}}</td>
                        </tr>
                        <tr v-if="profile.addresses">
                            <th class="table-secondary">Billing Address</th>
                            <td>{{billingAddress}}</td>
                        </tr>
                        <tr v-if="profile.addresses">
                            <th class="table-secondary">Shipping Address</th>
                            <td>{{shippingAddress}}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <button type="button" class="btn btn-danger w-100 mt-4 fw-bold" @click.stop="logoutSession">
                <span class="font-title">Logout Session</span>
            </button>

        </div>
    </div>
</template>

<script>
import ImageUploadBox from '@/components/ImageUploadBox.vue';

export default {
    name: 'ProfileView',
    components: { ImageUploadBox },
    mounted() {
        this.$store.dispatch('authy/fetchUserProfile')
    },
    computed: {
        profile() {
            return this.$store.getters['authy/profile']
        },
        uploadedProfileImage() {
            if (this.profile && this.profile.profile && this.profile.profile.image) {
                return this.profile.profile.image;
            } else {
                return '';
            }
        },
        billingAddress() {
            const billing = this.profile.addresses.billing;
            return billing ? `${billing.line1} ${billing.line2} ${billing.state} ${billing.pincode}` : '';
        },
        shippingAddress() {
            const shipping = this.profile.addresses.shipping;
            return shipping ? `${shipping.line1} ${shipping.line2} ${shipping.state} ${shipping.pincode}` : '';
        }
    },
    methods: {
        handleImageUpload(file) {
            // prepare a formdata add the file and send it to the server
            const formData = new FormData();
            formData.append('image', file);
            this.$store.dispatch('authy/uploadProfile', formData);
        },
        logoutSession() {
            this.$store.dispatch("authy/sendLogoutRequest");
        },
    },
}
</script> 