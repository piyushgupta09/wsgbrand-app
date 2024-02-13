<template>
  <div class="font-title min-vh-100 d-flex flex-column">
    <div class="flex-fill d-flex flex-column justify-content-between p-3">
      <div class="flex-fill d-flex flex-column justify-content-center align-items-center h-100">
        <img :src="require('/src/assets/logo.png')" style="width: 140px; object-fit: contain; filter: saturate(450%);">
        <span class="fw-bold fs-4">Metro Fashion</span>
        <span class="">Most trusted brand in Fast Fashion</span>
      </div>
      <div class="mb-3">
        <div class="d-flex flex-column justify-content-center align-items-center mb-2">
          <span class="text-bg-dark w-100 text-center p-2 fw-bold">Contact Us</span>
          <span class="mt-2 text-center">support@desigal.in</span>
          <span class="mt-2 text-center">9999786993 or 9555924440</span>
          <span class="mt-2 text-center">B-74, Okhla Phase-II,<br> New Delhi - 110020, Delhi, India</span>
        </div>
      </div>
      <div class="mt-3">
        <div class="d-flex flex-column justify-content-center align-items-center mb-2">
          <span class="text-bg-dark w-100 text-center p-2 fw-bold">Follow Us</span>
          <div class="d-flex justify-content-evenly align-items-center w-100 mt-2">
            <a href="https://www.facebook.com/metrofashion.in" target="_blank" class="text-decoration-none text-dark">
              <i class="bi bi-facebook fs-3"></i>
            </a>
            <a href="https://www.instagram.com/metrofashion.in/" target="_blank" class="text-decoration-none text-dark">
              <i class="bi bi-instagram fs-3"></i>
            </a>
            <a href="http://www.twitter.com/metrofashionin" target="_blank" class="text-decoration-none text-dark">
              <i class="bi bi-twitter fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-bg-dark text-center py-2 d-flex flex-column">
      <span class="fw-bold ls-1 fs-5">Metro Fashion</span>
      <apan class="small">Copyright © 2024 | All rights reserved</apan>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
}
</script>
