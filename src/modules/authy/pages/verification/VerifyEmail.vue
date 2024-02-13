<template>
  <div class="card border-0 shadow mx-auto">
    <div class="card-body p-4">

      <p class="fs-5 text-center">Account Verification</p>

      <div class="text-muted mb-3">
        A new verification OTP has been sent to <strong>{{ useremail }}</strong>, please check and enter the verification OTP code below.

        <form @submit.prevent="verifyOtpCode" class="my-3">
          <div class="form-floating mb-3">
            <input
              type="number"
              id="inputOtpcode"
              class="form-control"
              v-model="otpcode"
              placeholder="Enter OTP Code"
            />
            <label for="inputOtpcode">Enter OTP</label>
          </div>
          <FormErrors />
          <submit-button class="brand-btn-p fw-bold font-title w-100">
            Submit OTP for verification
          </submit-button>
        </form>

      </div>

      <form @submit.prevent="resendVerificationCode">
        <submit-button class="text-start ps-0 w-100">
          Having issues! 
          <span class="text-primary ">Resend Otp</span>
        </submit-button>
      </form>

      <div class="d-flex">
        <span class="pe-1">Need to create new account?</span>
        <router-link :to="{ name: 'Register' }">Click here</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import FormErrors from '@/components/FormErrors.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

export default {
  components: { 
    FormErrors,
    SubmitButton,
  },
  name: "VerifyEmail",
  data() {
    return {
      otpcode: "",
    };
  },
  computed: {
    useremail() {
      return this.$store.getters["authy/useremail"];
    },
  },
  methods: {
    resendVerificationCode() {
      this.$store.dispatch("authy/resendVerificationCode");
    },
    verifyOtpCode() {
      this.$store.dispatch("authy/verifyOtpCode", this.otpcode);
    },
  },
};
</script>
