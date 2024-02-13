<template>
    <div class="overflow-scroll">
        <pwa-install-modal />
        <notification-permission-modal v-if="auth" />
        <!-- <location-permission-modal @locationFetched="handleLocationFetched" /> -->
        <BrandBanner />
        <Footer />
    </div>
</template>

<script>
import BrandBanner from "@/sections/BrandBanner.vue";
import Footer from "@/sections/Footer.vue";
import PwaInstallModal from '@/components/alerts/PwaInstallModal.vue';
// import LocationPermissionModal from '@/components/alerts/LocationPermissionModal.vue';
import NotificationPermissionModal from '@/components/alerts/NotificationPermissionModal.vue';

export default {
    name: 'HomePage',
    components: {
        BrandBanner,
        Footer,
        PwaInstallModal,
        // LocationPermissionModal
        NotificationPermissionModal,
    },
    mounted() {
        window.addEventListener('resize', this.adjustHeight());
        window.addEventListener('load', this.adjustHeight());
    },
    computed: {
        auth() {
            return this.$store.getters['authy/isAuthenticated'];
        },
    },
    methods: {
        adjustHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        },
        handleLocationFetched(userLocation) {
            // Handle the received location data
            console.log('Received user location:', userLocation);
        }
    }
}
</script>
  


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

.bg {
    background-image: linear-gradient(66deg, rgba(220, 53, 69, 1) 33.33%, rgba(229, 104, 116, 1) 33.33%, rgba(229, 104, 116, 1) 66.66%, rgba(220, 53, 69, 1) 66.66%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    align-items: stretch;
    box-sizing: content-box;
    padding: 34px 68px;
}

#slider {
    @mixin white-gradient {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    $animationSpeed: 15s;

    // Animation
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-250px * 5))
        }
    }


    // Styling
    .slider {
        background-color: white;
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
        height: 180px;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 100%;


        &::before,
        &::after {
            @include white-gradient;
            content: "";
            height: 150px;
            position: absolute;
            width: 50px;
            z-index: 2;
        }

        &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        &::before {
            left: 0;
            top: 0;
        }

        .slide-track {
            animation: scroll $animationSpeed linear infinite;
            display: flex;
            width: calc(250px * 6);

        }

        .slide {
            height: auto;
            width: 100%;
        }
    }

    .slide img:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

    .slide img {
        transition: 1s;
    }

}

#slider1 {
    @mixin white-gradient {
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    $animationSpeed: 15s;

    // Animation
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-250px * 5))
        }
    }


    // Styling
    .slider1 {
        background: white;
        // box-shadow: 0 10px 10px 0px rgba(0, 0, 0, .125);
        height: 200px;
        margin: auto;
        overflow: hidden;
        position: relative;
        width: 100%;


        &::before,
        &::after {
            @include white-gradient;
            content: "";
            height: 150px;
            position: absolute;
            width: 50px;
            z-index: 2;
        }

        &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        &::before {
            left: 0;
            top: 0;
        }

        .slide-track1 {
            animation: scroll $animationSpeed linear infinite;
            display: flex;
            width: calc(250px * 6);

        }

        .slide1 {
            height: auto;
            width: 100%;
        }
    }

    .slide1 img:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

    .slide1 img {
        transition: 1s;
    }

}
</style>