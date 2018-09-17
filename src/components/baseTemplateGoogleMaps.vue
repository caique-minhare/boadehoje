<template>
    <div>
        <gmap-map
                :center="center"
                :zoom="14"
                style="
                width:100%;
                height:100%;
                position: absolute;"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "GoogleMap",
        data() {
            return {
                center: { lat: -20.464747, lng: -54.622017 },
                markers: [],
                places: [],
                currentPlace: null
            };
        },

        mounted() {
            this.geolocate();
            this.populateWithMarkers();
        },

        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
                this.currentPlace = place;
            },
            populateWithMarkers(){
                const marker = {
                    lat: -20.464517,
                    lng: -54.610144
                };
                this.markers.push({position: marker})
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({ position: marker });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function() {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
        }
    };
</script>
<style>
</style>