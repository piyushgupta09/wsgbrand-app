<template>
  <div class="card border-0 shadow mx-auto text-center font-title">
    <div class="card-body p-4">

      <p class="fs-5 fw-500 text-muted">Login to your account</p>

      <FormErrors />

      <div class="mb-3">

        <div class="form-floating mb-3">
          <input type="text" id="inputUsername" class="form-control" v-model="form.username" placeholder="name@example.com">
          <label for="inputUsername">Mobile no.</label>
        </div>

        <div v-if="!loginViaOtp" class="form-floating mb-3">
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="form.password">
          <label for="inputPassword">Enter Password</label>
        </div>

        <!-- <div class="form-check brand-checkbox form-switch mb-3 text-start">
          <input type="checkbox" class="form-check-input" id="switchLoginViaOtp" v-model="loginViaOtp">
          <label class="form-check-label" for="switchLoginViaOtp">Login via Otp</label>
        </div>

        <p v-if="loginViaOtp && otpSent" class="text-start text-success pulse2">
          <i class="bi bi-info-circle pe-2"></i>
          Otp sent successfully, enter otp to login
        </p>  -->

        <div v-if="loginViaOtp" class="input-group mb-3">
          <div class="mb-2 mt-2n" v-if="!otpSent">Click the button below to get an otp</div>
          <loading-button v-if="!otpSent" styles="brand-btn-p rounded w-100 fw-500" @btn-clicked="sendOtpCode">Send OTP</loading-button>
          <input :class="{ 'd-none': !otpSent }" :autofocus="otpSent" type="text" id="inputOtpCode" class="form-control" placeholder="Enter OTP Code" v-model="form.otpcode">
          <button v-if="otpSent" class="brand-btn-s fw-500 input-group-text br-end" @btn-clicked="sendOtpCode">ReSend Otp</button>
          <loading-button v-if="otpSent" styles="brand-btn-p rounded w-100 mt-3 fw-bold" @btn-clicked="loginAccount">Login Now</loading-button>
        </div>

        <loading-button v-else styles="brand-btn-p rounded w-100 fw-bold" @btn-clicked="loginAccount">Login Now</loading-button>

      </div>

      <!-- <div class="d-flex mt-2 font-app">
        <span class="pe-1">Need Account!</span>
        <router-link :to="{ name: 'Register' }" class="text-dark">Create new account</router-link>
      </div> -->

      <!-- <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-sm btn-dark rounded-0" @click="loginAs('mbrand')">Brand App</button>

        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-dark rounded-0" data-bs-toggle="dropdown" aria-expanded="false">
            Factory App
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" @click="loginAs('factorya')">Factory A</button></li>
            <li><button class="dropdown-item" @click="loginAs('factoryb')">Factory B</button></li>
            <li><button class="dropdown-item" @click="loginAs('factoryc')">Factory C</button></li>
          </ul>
        </div>

        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-dark rounded-0" data-bs-toggle="dropdown" aria-expanded="false">
            Vendor App
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" @click="loginAs('vendor1')">Vendor 1</button></li>
            <li><button class="dropdown-item" @click="loginAs('vendor2')">Vendor 2</button></li>
            <li><button class="dropdown-item" @click="loginAs('vendor3')">Vendor 3</button></li>
          </ul>
        </div>
        
      </div> -->

    </div>
  </div>
</template>

<script>
import FormErrors from '@/components/FormErrors.vue'
import LoadingButton from '@/components/buttons/LoadingButton.vue'

export default {
  name: 'LoginAccount',
  components: {
    FormErrors,
    LoadingButton,
  },
  data() {
    return {
      loginViaOtp: false,
      otpSent: false,
      form: {
        device: navigator.userAgent,
        username: '',
        password: '',
        otpcode: ''
      }
    }
  },
  watch: {
    loginViaOtp() {
      this.otpSent = false;
      this.form.otpcode = '';
      this.form.password = '';
    }
  },
  methods: {
    loginAccount() {
      if (this.form.username === '') {
        // Username is required
        this.$store.dispatch('setToast', { type: 'error', message: 'Please enter email id.' }); // or mobile no.        
      } else {
        if (this.loginViaOtp) {
          if (this.form.otpcode === '') {
            // Otp code is required
            this.$store.dispatch('setToast', { type: 'error', message: 'Please enter otp code' });
          }
        } else {
          if (this.form.password === '') {
            // Password is required
            this.$store.dispatch('setToast', { type: 'error', message: 'Please enter password' });
            return;
          }
        }
        // Send login request
        this.$store.dispatch('authy/sendLoginRequest', this.form);
      }
    },
    sendOtpCode() {
      if (this.form.username === '') {
        // Username is required
        this.$store.dispatch('setToast', { type: 'error', message: 'Please enter email id.' }); // or mobile no.
      } else {
        this.$store.dispatch('authy/sendloginViaOtpCode', this.form).then(() => {
          this.otpSent = true;
        });
      }
    },
    loginAs(username) {
      this.form.password = 'password';
      this.form.username = username + '@gmail.com';
      this.loginAccount();
    }
  },
}
</script>
