<template>
    <router-link :to="link.path"
        class="bn-btn btn border-0 shadow-none flex-fill d-flex flex-column align-items-center">
            <i class="bi" :class="link.icon"></i>
    </router-link>
</template>

<script>
export default {
  name: 'BottomIconLink',
  props: ['link']
}
</script>
