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
                    @click="showModal"
            ></gmap-marker>
        </gmap-map>
        <DetailBox
            v-show="isModalVisible"
            @close="closeModal">
        </DetailBox>
    </div>
</template>

<script>
    import DetailBox from "./baseTemplateDetailBox";

    export default {
        name: "GoogleMap",
        components: {
            DetailBox
        },
        data() {
            return {
                center: { lat: -20.464747, lng: -54.622017 },
                markers: [],
                places: [],
                currentPlace: null,
                isModalVisible: false
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
            showModal(){
                this.isModalVisible = true;
            },
            closeModal(){
              this.isModalVisible = false;
            },
            populateWithMarkers(){
                for( var i = 0 ; i < 0.50 ; i += (Math.random()*0.01)){
                    const marker = {
                        lat: -20.464517 + (i*(Math.random()*2)),
                        lng: -54.610144 + (i*(Math.random()*3))
                    };
                    this.markers.push({position: marker})
                }
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