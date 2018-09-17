<template>
    <div id="app">
        <google-map></google-map>
    </div>
</template>

<script>
    import GoogleMap from "./components/baseTemplateGoogleMaps";
    import DetailBox from "./components/baseTemplateDetailBox";

    export default {
        name: 'app',
        components: {
            GoogleMap,
            DetailBox
        }
    }
</script>

<style>
</style>
