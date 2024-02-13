<template>
    <div class="container">
        <div v-if="locationPermissionGranted">
            <p>Location permission granted!</p>
            <h5 v-if="userLocation">
                User Coordinate: {{ userLocation.latitude }}, {{ userLocation.longitude }}
                Distance: {{ distance }} km and ite will take {{ time }} to reach at an avg speed of {{ speed }} km/hr.
            </h5>
        </div>
        <div v-else>
            <div class="modal fade show" v-show="showLocationPopup" tabindex="-1" style="display: block">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 shadow-lg mx-auto" style="width: 350px">
                        <div class="modal-body font-title">
                            <p class="text-center fw-500">
                                Allow us to access your location to deliver your order faster.
                            </p>
                            <div class="d-flex justify-content-center">
                                <div class="btn-group w-100">
                                    <button class="btn btn-sm btn-outline-secondary fw-500" @click="cancel">I'll explain location</button>
                                    <button class="btn btn-sm px-3 btn-success fw-bold" @click="accept">Yes, for easy delivery</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LocationPermissionModal",
    data() {
        return {
            base_location: {
                latitude: 28.6509415,
                longitude: 77.179113,
            },
            speed: 20,
            distance: 0,
            time: 0,
            showLocationPopup: false,
            userLocation: null,
            locationPermissionGranted: false,
        };
    },
    created() {
        this.checkGeolocationSupport();
    },
    methods: {
        cancel() {
            this.showLocationPopup = false;
        },
        accept() {
            this.fetchUserLocation();
        },
        fetchUserLocation() {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.userLocation = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        };
                        this.locationPermissionGranted = true;
                        this.showLocationPopup = false;
                        this.calculateDistanceAndTime();

                        // Emit the userLocation to the parent component
                        this.$emit('locationFetched', this.userLocation);
                    },
                    (error) => {
                        console.error(`Error getting location: ${error.message}`);
                        this.showLocationPopup = false;
                    },
                    {
                        enableHighAccuracy: false,
                        timeout: 10000,
                        maximumAge: 60000
                    }
                );
            } else {
                console.error('Geolocation is not supported by your browser');
                this.showLocationPopup = false;
            }
        },
        checkGeolocationSupport() {
            if ('geolocation' in navigator) {
                navigator.permissions.query({ name: 'geolocation' })
                .then((result) => {
                    if (result.state === 'granted') {
                        this.locationPermissionGranted = true;
                        this.fetchUserLocation();
                    } else if (result.state === 'prompt') {
                        this.showLocationPopup = true;
                    }
                })
                .catch((error) => {
                    console.error(`Error checking geolocation permission: ${error.message}`);
                });
            } else {
                console.error('Geolocation is not supported by your browser');
            }
        },
        calculateDistanceAndTime() {
            const distance = this.getDistanceFromLatLonInKm(
                this.base_location.latitude,
                this.base_location.longitude,
                this.userLocation.latitude,
                this.userLocation.longitude
            );
            this.distance = distance.toFixed(2);

            // Calculate time in decimal hours
            const timeInHours = distance / 20;
            
            // Convert to total minutes
            const totalMinutes = timeInHours * 60;

            // Separate into hours and minutes
            const hours = Math.floor(totalMinutes / 60);
            const minutes = Math.round(totalMinutes % 60);

            // Format time string
            this.time = hours + " hours and " + minutes + " minutes";
        },
        getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radius of the earth in km
            const dLat = this.deg2rad(lat2 - lat1);
            const dLon = this.deg2rad(lon2 - lon1);
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c; // Distance in km
        },
        deg2rad(deg) {
            return deg * (Math.PI / 180);
        }
    }
};
</script>
