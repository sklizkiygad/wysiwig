<template>
  <div id="app">
    <Modal/>
    <router-view/>
  </div>
</template>

<script>
  import Modal from "@/components/Modal/Modal";

  export default {
    name:"App",
    components:{Modal}
  }
</script>

<style>

@import "./assets/css/style.css";
</style>
