<template>
  <div class="card border-0 shadow mx-auto text-center font-title">
    <div class="card-body p-4">

      <p class="fs-5 fw-500 text-muted">Register New Account</p>

      <FormErrors />

      <form @submit.prevent="sendRegisterRequest" class="mb-3">
        <input type="text" class="form-control py-2 mb-2" v-model="form.name" placeholder="Person Name" required autofocus>
        <input type="text" class="form-control py-2 mb-2" v-model="form.username" placeholder="Email Id" required> <!--  or Mobile No. -->
        <input type="password" class="form-control py-2 mb-2" v-model="form.password" placeholder="Enter Password" required>
        <input type="password" class="form-control py-2 mb-3" v-model="form.password_confirmation" placeholder="Confirm Password" required>
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="text-start fw-bold">
            Please select your account type:
          </span>
          <div class="dropdown">
            <button class="btn btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-info-circle ts-sm"></i>
            </button>
            <ul class="dropdown-menu" style="width: 80vw">
              <li>
                <p class="dropdown-item-text">
                  <span class="fw-bold">Vendor</span> - Vendor means you provide Ready-to-Sell products.
                </p>
              </li>
              <li>
                <p class="dropdown-item-text">
                  <span class="fw-bold">Factory</span> - Factory means you provide Fabric-to-Product service.
                </p>
              </li>
              <li>
                <p class="dropdown-item-text">
                  <span class="fw-bold">Brand Staff</span> - If you are a brand staff, please select this option.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex">
            <input type="radio" id="inputVendor" class="form-check-input" v-model="form.type" value="user-vendor">
            <label class="ps-2 pe-1" for="inputVendor">Vendor</label>
          </div>
          <div class="d-flex">
            <input type="radio" id="inputFactory" class="form-check-input" v-model="form.type" value="user-factory">
            <label class="ps-2 pe-1" for="inputFactory">Factory</label>
          </div>
          <div class="d-flex">
            <input type="radio" id="inputBrand" class="form-check-input" v-model="form.type" value="user-brand">
            <label class="ps-2 pe-1" for="inputBrand">Brand Staff</label>
          </div>
        </div>
        <div class="text-start mb-3">
          <input type="checkbox" class="form-check-input" v-model="form.terms">
          <label class="ps-2 pe-1" for="inputTerms">I agree and accept</label>
          <router-link :to="{ name: 'TermsPage' }" class="td-none">terms and conditions</router-link>
          <span class="ps-1">of Metro Fashion to access their web application.</span>
        </div>
        <submit-button class="brand-btn-p fw-bold font-title w-100">Create Account</submit-button>
      </form>

      <div class="d-flex mt-2 font-app">
        <span class="pe-1">Already Registered! Click to </span>
        <router-link :to="{ name: 'Login' }" class="text-dark">login here</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import FormErrors from '@/components/FormErrors.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

export default {
  name: 'RegisterAccount',
  components: {
    FormErrors,
    SubmitButton,
  },
  data() {
    return {
      form: {
        device: navigator.userAgent,
        terms: true,
        type: 'user-vendor',
      }
    }
  },
  methods: {
    sendRegisterRequest() {
      this.$store.dispatch('authy/sendRegisterRequest', this.form)
    }
  }
}
</script>
